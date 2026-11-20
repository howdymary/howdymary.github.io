export const taskNames={alarm:'Clock',drawer:'Drawer',laptop:'Laptop',globe:'Globe'};

export function stepCountAt(episode,time){
 return episode.step_events.filter(event=>event.detected_t<=Math.min(time,episode.duration)).length;
}

export function activityAt(episode,time){
 const decision=episode.model_decisions?.findLast(d=>d.t<=time),observation=decision?.observation;
 const task=observation?.station||observation?.task||(taskNames[observation?.domain]?observation.domain:null);
 const frame=episode.trajectory?.frames.findLast(f=>f.t<=time);
 const phase=observation?.domain==='recovery'?'Arm recovery':observation?.domain==='walk'?
  ({turn:'Turning',align:'Aligning',walk:'Walking'}[frame?.phase]||'Walking'):
  observation?'Task control':'Settling';
 return {task,phase,label:task?[taskNames[task]||task,phase].join(' · '):phase};
}

export function taskStatesAt(episode,time){
 const states=Object.keys(taskNames).map(task=>{
  const event=episode.events.findLast(e=>e.task===task&&e.t<=time&&typeof e.success==='boolean'&&e.phase!=='recover');
  return {task,status:event?(event.success?'passed':'failed'):'pending'};
 });
 if(time<episode.duration&&!states.some(s=>s.status==='failed')){
  const task=activityAt(episode,time).task;
  const pending=states.find(s=>s.status==='pending'&&(task?s.task===task:!episode.model_decisions?.length));
  if(pending)pending.status='active';
 }
 return states;
}

export function comparisonEvidence(before,after){
 if(!before.qualified_complete||!after.qualified_complete){
  const headline=after.qualified_complete?'Full sequence completed':!after.complete?'Comparison run did not complete':'Quality limits exceeded';
  return {headline,detail:'Step and time savings require both runs to complete within the declared limits.',status:'unqualified',stepReduction:null};
 }
 if(before.steps.attempts<=0)return {headline:'Efficiency comparison unavailable',detail:'The parent has no measurable step baseline.',status:'unqualified',stepReduction:null};
 const difference=before.steps.attempts-after.steps.attempts;
 const reduction=difference/before.steps.attempts;
 const seconds=before.duration-after.duration;
 return {headline:difference===0?'Same number of steps':`${Math.abs(difference)} ${difference>0?'fewer':'additional'} steps`,
  detail:`${Math.abs(reduction*100).toFixed(1)}% ${reduction>=0?'fewer':'more'} steps · ${Math.abs(seconds).toFixed(1)} s ${seconds>=0?'faster':'slower'}. Full-run result for this scenario.`,
  status:reduction>0&&seconds>=0?'improved':reduction===0&&seconds===0?'unchanged':'mixed',stepReduction:reduction};
}
