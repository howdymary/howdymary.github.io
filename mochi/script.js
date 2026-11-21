const progress = document.querySelector('.reading-progress');
const sections = [...document.querySelectorAll('.prose > section')];
const nav = [...document.querySelectorAll('.contents a')];
function updateReading() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
  const active = [...sections].reverse().find(section => section.getBoundingClientRect().top < 180);
  nav.forEach(link => link.classList.toggle('active', link.hash === `#${active?.id}`));
}
addEventListener('scroll', updateReading, {passive: true});
addEventListener('resize', updateReading);
updateReading();

function watchReplay(iframe) {
  const send = visible => iframe.contentWindow?.postMessage({type:'mochi-visibility',visible},location.origin);
  const observer = new IntersectionObserver(entries => send(entries[0].isIntersecting), {threshold:0.05});
  let sizeObserver;
  const loaded = () => {
    // These replays share the article's origin. Fit their actual content so the
    // stacked phone controls never need a second, nested scrollbar.
    sizeObserver?.disconnect();
    const main = iframe.contentDocument?.querySelector('main');
    if (main) {
      const fit = () => {iframe.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 2}px`;};
      sizeObserver = new ResizeObserver(fit);
      sizeObserver.observe(main);
      fit();
    }
    const rect = iframe.getBoundingClientRect();
    send(rect.bottom > 0 && rect.top < innerHeight);
  };
  observer.observe(iframe);
  iframe.addEventListener('load',loaded);
  if (iframe.contentDocument?.readyState === 'complete') loaded();
  return () => {observer.disconnect();sizeObserver?.disconnect();iframe.removeEventListener('load',loaded);};
}
document.querySelectorAll('[data-visibility-replay]').forEach(watchReplay);
let closeEmbedded=null;
document.querySelectorAll('[data-replay]').forEach(block => {
  const placeholder = block.querySelector('.replay-placeholder');
  const button = block.querySelector('.load-replay');
  button.addEventListener('click', () => {
    if(closeEmbedded)closeEmbedded();
    const iframe = document.createElement('iframe');
    const query=new URLSearchParams({study:block.dataset.replay});
    query.set('v','20261120-notes');
    if(block.dataset.scenario)query.set('scenario',block.dataset.scenario);
    iframe.src = `replay/?${query}`;
    iframe.title = block.dataset.replay === 'efficiency' ? 'Walking and task-control progression across five trained checkpoints' : block.dataset.replay === 'training' ? 'Matched parent and trained checkpoint simulation replay' : 'Matched navigation controller comparison';
    iframe.allowFullscreen = true;
    const bar = document.createElement('div');
    bar.className = 'replay-loaded';
    const label = document.createElement('span');
    label.textContent = 'RECORDED PHYSICS · SYNCHRONIZED PLAYBACK';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Close replay';
    bar.append(label, close);
    placeholder.hidden = true;
    placeholder.style.display = 'none';
    placeholder.after(bar, iframe);
    const stopObserving=watchReplay(iframe);
    const reset=() => {
      stopObserving();
      iframe.remove();
      bar.remove();
      placeholder.hidden = false;
      placeholder.style.display = '';
      closeEmbedded=null;
    };
    closeEmbedded=reset;
    close.addEventListener('click',()=>{reset();button.focus();});
  });
});

fetch('replay/efficient-v15/manifest.json',{cache:'no-store'}).then(response=>{if(!response.ok)throw Error('Latest manifest unavailable');return response.json();}).then(manifest=>{
  const scenario=manifest.scenarios.find(s=>s.id===manifest.default_scenario)||manifest.scenarios[0];
  const update=manifest.default_update??manifest.selected_update;
  const version=scenario.versions.find(v=>v.update===update)||scenario.versions.at(-1);
  const before=manifest.recordings[scenario.parent_file],after=manifest.recordings[version.file];
  document.querySelector('#latest-recording-label').textContent=`V15 · RECORDED UPDATE ${version.update}`;
  const context=scenario.partition==='held_out'?'A final-test scenario; inspect the full cohort below.':'One development scenario; final-test performance is not established by this recording.';
  document.querySelector('#latest-recording-caption').textContent=(before.qualified_complete&&after.qualified_complete?
    `The same scenario completed in ${after.steps.attempts} steps versus ${before.steps.attempts}, and ${after.duration.toFixed(1)} physical seconds versus ${before.duration.toFixed(1)}. `:
    `This is the latest recorded checkpoint. ${after.complete?'The task sequence finished; inspect its quality limits.':'This attempt did not complete the task sequence.'} `)+context;
  const table=document.querySelector('#current-checkpoint-progress');
  const progressScenario=manifest.scenarios.find(s=>s.partition==='development')||scenario;
  const header=document.createElement('div');header.className='checkpoint-progress-row header';header.setAttribute('role','row');
  for(const label of ['New updates','Sequence','Steps','Seconds']){const cell=document.createElement('span');cell.setAttribute('role','columnheader');cell.textContent=label;header.append(cell);}
  table.append(header);
  for(const version of progressScenario.versions){
    const record=manifest.recordings[version.file],row=document.createElement('div');row.className='checkpoint-progress-row';row.setAttribute('role','row');
    const link=document.createElement('a');link.href=`replay/?study=efficiency&scenario=${encodeURIComponent(progressScenario.id)}&update=${version.update}`;link.textContent=`Update ${version.update}`;link.target='_blank';link.rel='noopener';link.setAttribute('role','cell');row.append(link);
    for(const value of [record.qualified_complete?'Qualified':record.complete?'Quality limit failed':'Incomplete',record.steps.attempts,record.duration.toFixed(1)]){const cell=document.createElement('span');cell.setAttribute('role','cell');cell.textContent=String(value);row.append(cell);}
    table.append(row);
  }
}).catch(()=>{});
