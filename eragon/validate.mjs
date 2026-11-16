import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import {sources,segments,anchors,prospects,bets,deployments,researchDate} from './data.js';
import {calculateValue} from './value.js';
assert.equal(prospects.length,26);
assert.equal(new Set(prospects.map(p=>p.id)).size,26);
for(const p of prospects){
 for(const key of ['id','name','url','segment','anchor','entry','buyer','group','priority','confidence','evidence','adjacency','workflow','constraint','expansion','validate','trigger','triggerHypothesis','date'])assert.ok(typeof p[key]==='string'&&p[key].length,`${p.id}: missing ${key}`);
 assert.ok(segments.some(s=>s.id===p.segment));assert.ok(anchors.some(a=>a.id===p.anchor));assert.ok(['Flux','Agents','Both'].includes(p.entry));assert.ok(['Start','Explore','Defer'].includes(p.priority));assert.ok(p.tags.every(t=>segments.some(s=>s.id===t)));assert.equal(new URL(p.url).protocol,'https:');assert.ok(p.sources.length);assert.equal(p.status,'Prospect hypothesis');
}
for(const a of anchors){assert.ok(sources.some(s=>s.id===a.source));}
for(const b of bets)assert.ok(b.ids.every(id=>prospects.some(p=>p.id===id)));
for(const d of deployments)assert.ok(prospects.some(p=>p.id===d.id));
const base={cases:10000,hourly:60,before:8,after:3,realization:80,monthly:14000,implementation:30000};
assert.equal(calculateValue(base).net,282000);
assert.equal(calculateValue({...base,realization:0}).net,-198000);
assert.equal(calculateValue({...base,cases:0}).net,-198000);
assert.ok(calculateValue({...base,after:12}).hours<0);
assert.ok(calculateValue({...base,after:12}).net < -198000);
assert.equal(calculateValue({...base,monthly:0,implementation:0}).net,480000);
const html=await readFile(new URL('./index.html',import.meta.url),'utf8');
assert.ok(!/href="\/(?!\/)|src="\/(?!\/)/.test(html),'Assets must be relative for /eragon/');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const m of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(m[1]),`Missing target ${m[1]}`);
await writeFile(new URL('./research.json',import.meta.url),JSON.stringify({researchDate,sources,segments,anchors,prospects,bets,deployments},null,2)+'\n');
console.log(`Validated ${prospects.length} prospects, ${anchors.length} customer anchors, source references, hash targets, and value-model edge cases. research.json updated.`);
