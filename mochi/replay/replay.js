import {createCurriculumStage} from './curriculum-stage.js';
import {activityAt,stepCountAt,comparisonEvidence} from './efficient-evidence.mjs';

const $ = selector => document.querySelector(selector);
const query = new URLSearchParams(location.search);
const navigation = query.get('study') === 'navigation';
const efficiency = query.get('study') === 'efficiency';
const folder = efficiency?'efficient-v15/':navigation ? 'directional-v14/' : 'terrain-training/';
const cache = new Map();
let manifest, cases, current, stages, episodes, metadata;
let time = 0, maximum = 0, playing = false, loading = true, dirty = true;
let last = performance.now(), rendered = 0, request = 0, visible = true;

async function read(file) {
  if (!cache.has(file)) {
    const pending = (async () => {
      const response = await fetch(folder + file);
      if (!response.ok) throw Error(`Recording unavailable (${response.status}).`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes[0] === 31 && bytes[1] === 139) {
        return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).json();
      }
      return JSON.parse(new TextDecoder().decode(bytes));
    })();
    cache.set(file, pending);
    pending.catch(() => cache.delete(file));
  }
  return cache.get(file);
}

function setPlaying(value) {
  playing = value;
  $('#play').textContent = value ? 'Pause' : 'Play';
  last = performance.now();
}

function showError(error) {
  setPlaying(false);
  loading = false;
  $('#status').classList.add('error');
  $('#status').textContent = `The replay could not load. ${error.message} Reload this view to retry; the recording and written assessment remain available in the article.`;
  console.error(error);
}

async function loadPair() {
  const token = ++request;
  loading = true;
  setPlaying(false);
  $('#status').classList.remove('error');
  $('#status').textContent = 'Loading the matched recordings…';
  $('#play').disabled = $('#restart').disabled = $('#scrub').disabled = true;
  const version = navigation ? null : current.versions.find(v => v.update === Number($('#checkpoint').value));
  const files = navigation ? [current.before.file, current.after.file] : [current.parent_file, version.file];
  const data = await Promise.all(files.map(read));
  if (token !== request) return;
  episodes = data;
  metadata = navigation ? [current.before, current.after] : files.map(file => manifest.recordings[file]);
  stages.forEach((stage, i) => stage.setEpisode(data[i]));
  time = 0;
  maximum = Math.max(...data.map(e => e.duration));
  $('#scrub').max = Math.ceil(maximum * 20) / 20;
  $('#left-label').textContent = navigation ? 'Previous route' : 'Parent model';
  $('#right-label').textContent = navigation ? 'Turn-first navigation' : `${version.update === manifest.selected_update ? 'Selected' : 'Development'} · update ${version.update}`;
  for(const [i,side] of ['left','right'].entries())$('#'+side+'-id').textContent=metadata[i]?.checkpoint_id?`Model ${metadata[i].checkpoint_id.slice(0,12)}`:'';
  if (navigation) {
    const before = current.before.direction_metrics.forward_facing_fraction * 100;
    const after = current.after.direction_metrics.forward_facing_fraction * 100;
    $('#scope').textContent = 'Controller engineering comparison. Zero new Tinker optimizer updates. Same initial scenario and playback speed.';
    $('#metrics').textContent = `${before.toFixed(0)}% vs. ${after.toFixed(0)}% facing travel. Route duration: ${current.before.duration_s.toFixed(1)} s vs. ${current.after.duration_s.toFixed(1)} s. Stationary turns and book traversal are excluded from the heading metric.`;
  } else if(efficiency){
    const finalTest=current.partition==='held_out';
    $('#scope').textContent=finalTest?'Final test: checkpoint selection preceded this scenario. Each pane is one uninterrupted recorded episode.':
      'Development scenario. Checkpoint selection and final testing are '+(manifest.selection_finalized?'reported separately.':'still pending. Each pane is one uninterrupted recorded episode.');
    const pair=comparisonEvidence(metadata[0],metadata[1]);
    $('#metrics').textContent=`${pair.headline}. ${pair.detail} Recorded update ${version.update}; ${manifest.optimizer_updates_completed} new optimizer updates completed in the campaign. Native gait weights remain fixed. Physical time excludes inference waits.`;
  } else {
    const finalTest = current.partition === 'held_out';
    $('#scope').textContent = finalTest ? 'Final test: the checkpoint was selected on development scenarios before this test. Each pane is a separate, uninterrupted episode.' : 'Development scenario used for checkpoint selection. Intermediate checkpoints are not additional held-out results.';
    $('#metrics').textContent = '32 new optimizer updates in the campaign; selected update 1. Native gait and physical controllers stay fixed. Simulation time excludes remote inference waits.';
  }
  $('#status').textContent = 'Ready. Use Play/Pause to watch both recordings together, or drag the timeline.';
  $('#play').disabled = $('#restart').disabled = $('#scrub').disabled = false;
  loading = false;
  dirty = true;
  for (const file of cache.keys()) {
    if (cache.size > 4 && !files.includes(file)) cache.delete(file);
  }
}

async function selectCase(id) {
  current = cases.find(c => c.id === id);
  if (!navigation) {
    $('#checkpoint').replaceChildren();
    current.versions.forEach(version => {
      const option = new Option(`Update ${version.update}${version.update === manifest.selected_update ? ' · selected' : ''}`, version.update);
      $('#checkpoint').add(option);
    });
    const requested=Number(query.get('update'));
    const preferred = (query.has('update')&&current.versions.find(v=>v.update===requested))||current.versions.find(v => v.update === (manifest.default_update??manifest.selected_update)) || current.versions.at(-1);
    $('#checkpoint').value = preferred.update;
    $('#checkpoint').disabled = current.versions.length === 1;
  }
  await loadPair();
}

function render() {
  stages.forEach((stage, i) => {
    const episode = episodes[i];
    const frame = stage.frame(Math.min(time, episode.duration));
    const side = i ? 'right' : 'left';
    const ended = time >= episode.duration;
    const outcome = $(`#${side}-outcome`);
    const complete = metadata[i]?.complete;
    outcome.className = ended ? (complete ? 'ended-success' : 'ended-failure') : '';
    outcome.textContent = ended ? (complete ? (efficiency&&!metadata[i].qualified_complete?'Tasks complete; quality limit failed':'Completed') : String(metadata[i]?.failure || 'Incomplete').replaceAll('_', ' ')) : '';
    if(ended&&efficiency&&!metadata[i].qualified_complete)outcome.className='ended-failure';
    const phase = efficiency?activityAt(episode,time).label:frame?.task || frame?.phase || 'walking';
    const steps=episode.step_events?` · ${stepCountAt(episode,time)} steps`:'';
    $(`#${side}-reading`).textContent = `${ended ? 'Recorded finish' : phase} · ${Math.min(time, episode.duration).toFixed(1)} s${steps}`;
  });
  $('#time').textContent = `${time.toFixed(1)} / ${maximum.toFixed(1)} s`;
  $('#scrub').value = time;
}

function tick(now) {
  const elapsed = Math.max(0, Math.min(0.1, (now - last) / 1000));
  last = now;
  if (episodes && !loading && visible && !document.hidden) {
    if (playing) {
      time = Math.min(maximum, time + elapsed * Number($('#speed').value));
      dirty = true;
      if (time >= maximum) setPlaying(false);
    }
    if (dirty && now - rendered >= 1000 / 30) {
      render();
      rendered = now;
      dirty = false;
    }
  }
  requestAnimationFrame(tick);
}

async function init() {
  $('#study-label').textContent = efficiency?'MOCHI · WALKING AND TASK-CONTROL TRAINING':navigation ? 'MOCHI · NAVIGATION REFINEMENT' : 'MOCHI · TRAINING CHECKPOINTS';
  $('#title').textContent = efficiency?'V15 walking and task-control evaluation':navigation ? 'V14 turn-first navigation comparison' : 'V12 checkpoint evaluation';
  const response = await fetch(folder + 'manifest.json',{cache:'no-store'});
  if (!response.ok) throw Error('Study manifest unavailable.');
  manifest = await response.json();
  cases = efficiency?manifest.scenarios:navigation ? manifest.cases : manifest.scenarios.filter(s => s.partition === 'held_out' || s.id === 'development-43000');
  $('#scenario').replaceChildren();
  cases.forEach(c => $('#scenario').add(new Option(c.label, c.id)));
  const fallback = efficiency?(manifest.default_scenario||cases[0].id):navigation ? 'four-tasks' : 'held-out-44000';
  const initial = cases.find(c => c.id === query.get('scenario')) || cases.find(c => c.id === fallback) || cases[0];
  $('#scenario').value = initial.id;
  $('#checkpoint-field').hidden = navigation;
  stages = ['#left', '#right'].map(selector => createCurriculumStage($(selector), {scene:navigation ? initial.scene : manifest.scene, fullBody:true}));
  $('#status').textContent = 'Loading the robot and desk models. This may take a moment on the first visit…';
  await Promise.all(stages.map(stage => stage.ready));
  document.querySelectorAll('.loading-art').forEach(label => label.remove());
  $('#scenario').disabled = false;
  $('#scenario').addEventListener('change', e => selectCase(e.target.value).catch(showError));
  $('#checkpoint').addEventListener('change', () => loadPair().catch(showError));
  $('#play').onclick = () => {if (time >= maximum) time = 0; setPlaying(!playing); dirty = true;};
  $('#restart').onclick = () => {time = 0; setPlaying(true); dirty = true;};
  $('#scrub').oninput = e => {time = Math.min(maximum, Number(e.target.value)); setPlaying(false); dirty = true;};
  document.querySelectorAll('.stage').forEach(stage => {
    stage.addEventListener('pointermove', () => {dirty = true;}, {passive:true});
    stage.addEventListener('wheel', () => {dirty = true;}, {passive:true});
  });
  document.querySelectorAll('.views button').forEach(button => button.addEventListener('click', () => {
    const stage = stages[Number(button.parentElement.dataset.side)];
    if (button.dataset.view === 'feet') stage.inspect('feet');
    else stage.view(button.dataset.view === 'wide');
    dirty = true;
  }));
  await selectCase(initial.id);
  if(query.get('autoplay')==='1'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)setPlaying(true);
  requestAnimationFrame(tick);
}

addEventListener('message', event => {
  if (event.origin === location.origin && event.source === parent && event.data?.type === 'mochi-visibility') {
    visible = event.data.visible;
    dirty = true;
  }
});
init().catch(showError);
