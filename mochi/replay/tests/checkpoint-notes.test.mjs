import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {checkpointNotes,choiceChanges,currentCue} from '../checkpoint-notes.mjs';
const root = new URL('../',import.meta.url);
function fixture(folder,id,update) {
  const manifest=JSON.parse(readFileSync(new URL(`${folder}/manifest.json`,root)));
  const scenario=(manifest.scenarios||manifest.cases).find(s=>s.id===id);
  const version=scenario.versions?.find(v=>v.update===update);
  const files=version?[scenario.parent_file,version.file]:[scenario.before.file,scenario.after.file];
  const episodes=files.map(f=>JSON.parse(gunzipSync(readFileSync(new URL(`${folder}/${f}`,root)))));
  const metadata=version?files.map(f=>manifest.recordings[f]):[scenario.before,scenario.after];
  return {study:folder==='efficient-v15'?'efficiency':folder==='terrain-training'?'training':'navigation',scenario,update,selectedUpdate:manifest.selected_update,episodes,metadata};
}
test('V15 notes use the archived parent, early changes and all twelve changed choices',()=>{
  let f=fixture('efficient-v15','development-92000',0);
  assert.match(checkpointNotes(f).changed,/same parent recording/);
  f=fixture('efficient-v15','development-92000',1);
  assert.equal(choiceChanges(...f.episodes).changed.length,4);
  const notes=checkpointNotes(f);
  assert.match(notes.changed,/drawer, laptop, and globe/);
  assert.match(notes.changed,/arm-recovery choices stay the same/);
  for(const point of notes.moments) assert.ok(f.episodes[1].model_decisions.some(d=>d.t===point.time));
  assert.match(currentCue(f.episodes[1],notes.moments[1].time).title,/approaching the laptop/);
  f=fixture('efficient-v15','development-92000',4);
  assert.equal(choiceChanges(...f.episodes).changed.length,12);
  assert.match(checkpointNotes(f).changed,/All 12/);
});
test('plateau guidance is scoped to the actual scenario and agrees with updates 8 and 16',()=>{
  const a=fixture('efficient-v15','development-92000',8),b=fixture('efficient-v15','development-92000',16);
  assert.equal(choiceChanges(a.episodes[1],b.episodes[1]).changed.length,0);
  assert.equal(a.metadata[1].steps.attempts,476);assert.equal(b.metadata[1].steps.attempts,482);
  assert.match(checkpointNotes(b).limit,/not monotonic/);
  assert.doesNotMatch(checkpointNotes(fixture('efficient-v15','development-92001',16)).watch,/same categorical choices/);
});
test('a final test is not presented as a development checkpoint',()=>{
  const f=fixture('efficient-v15','held-out-93000',16);
  assert.match(checkpointNotes(f).watch,/fresh test/);
  assert.match(checkpointNotes(f).limit,/static policy/);
});
test('V12 notes respect actual choice records and do not call later updates selected',()=>{
  const f=fixture('terrain-training','development-43000',1);
  assert.equal(choiceChanges(...f.episodes).changed.length,1);
  assert.match(checkpointNotes(f).changed,/clock/);
  assert.match(checkpointNotes(f).limit,/did not establish learned manipulation/);
  assert.match(checkpointNotes(fixture('terrain-training','development-43000',32)).heading,/compare the choices/);
});
test('failed runs cannot be described as an efficiency win',()=>{
  const f=fixture('efficient-v15','development-92000',1);
  f.metadata=[{...f.metadata[0],qualified_complete:false},f.metadata[1]];
  assert.match(checkpointNotes(f).limit,/short failed run is not an efficiency improvement/);
});
test('navigation notes distinguish a corner turn from a four-task route',()=>{
  for(const id of ['desk-corner','four-tasks']){
    const f=fixture('directional-v14',id);
    const notes=checkpointNotes(f);
    assert.match(notes.changed,/zero new optimizer updates/);
    assert.match(notes.limit,id==='desk-corner'?/corner-navigation test/:/four-task route/);
    for(const point of notes.moments)assert.ok(f.episodes[1].events.some(e=>e.t===point.time));
  }
});
