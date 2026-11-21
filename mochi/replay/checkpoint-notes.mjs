const names = {alarm:'clock', drawer:'drawer', laptop:'laptop', globe:'globe'};
export function decisionsFor(episode) {
  return (episode.model_decisions || episode.decisions || []).map(d => {
    const domain = d.observation?.domain;
    const task = d.observation?.station || d.observation?.task || (names[domain] ? domain : null);
    return {...d, domain, task, key:`${domain}:${task}`};
  });
}
export function choiceChanges(before, after) {
  const parent = new Map(decisionsFor(before).map(d => [d.key,d]));
  const matched = decisionsFor(after).filter(d => parent.has(d.key));
  return {matched:matched.length, recoveryMatched:matched.filter(d => d.domain === 'recovery').length, changed:matched.filter(d => d.action !== parent.get(d.key).action)};
}
const list = words => new Intl.ListFormat('en',{style:'long',type:'conjunction'}).format(words);
function changeSummary(changes) {
  if (!changes.matched) return 'The archive does not include matching model-choice records for this pair.';
  if (!changes.changed.length) return `The ${changes.matched} corresponding recorded choices match the parent. A different duration alone does not establish a new learned behavior.`;
  if (changes.changed.length === changes.matched) return `All ${changes.matched} corresponding recorded choices differ from the parent. The whole-route result does not isolate each choice’s contribution.`;
  const walk = changes.changed.filter(d => d.domain === 'walk').map(d => names[d.task] || d.task);
  const tasks = changes.changed.filter(d => names[d.domain]).map(d => names[d.domain]);
  const recovery = changes.changed.filter(d => d.domain === 'recovery').length;
  return [walk.length ? `Walking choices change on the approaches to the ${list(walk)}.` : '',
    tasks.length ? `Task-control choices change at the ${list(tasks)}.` : '',
    recovery ? `Arm-recovery choices change at ${recovery} matched decision point${recovery===1?'':'s'}.` : changes.recoveryMatched ? 'The corresponding arm-recovery choices stay the same.' : ''].filter(Boolean).join(' ');
}
export function checkpointNotes({study, scenario, update, selectedUpdate, episodes, metadata}) {
  if (study === 'navigation') return {
    heading:'Turn toward the route before walking',
    changed:'The right recording uses turn-first navigation: face the next corridor, walk forward, then align with the task. This is controller engineering, with zero new optimizer updates.',
    watch:'Use Desk view to compare the direction of travel with the body heading. Stationary turns and book traversal do not count in the heading-alignment metric.',
    limit:`Both recordings complete this ${scenario.id === 'four-tasks' ? 'four-task route' : 'corner-navigation test'}. Better heading alignment came with a longer duration; this is separate from the training studies.`,
    moments:(episodes[1].events || []).filter(e => e.phase === 'turn-to-path').slice(0,3).map((e,i) => ({time:e.t,label:`Turn ${i+1}`}))
  };
  const efficiency = study === 'efficiency';
  const changes = choiceChanges(...episodes);
  let heading = update === 0 ? 'Start with the parent recording' : update === selectedUpdate ? `Update ${update}: the selected checkpoint` : `Update ${update}: compare the choices`;
  let changed = changeSummary(changes);
  let watch = 'Compare the approach to each station, the object contact and the arm withdrawal. Use Feet for placement and Desk for the full route.';
  let limit = efficiency ? 'One matched scenario. The gait and controller library stay fixed. The cohort assessment also compares a static policy, which performed similarly to selected update 16.' : 'One matched scenario. V12 selected update 1 using development evaluation; later updates are not automatically better. The component checks did not establish learned manipulation or recovery gains.';
  if (update === 0) {
    changed = 'Both panes show the same parent recording. This is the reference for the additional updates in this campaign, not an untrained robot.';
    watch = 'Watch the path to each station and the small turning and alignment steps before contact. Then select a later checkpoint to compare the same route.';
  } else if (efficiency && scenario.id === 'development-92000') {
    if (update === 1) {
      heading = 'Update 1: the first visible reduction';
      watch = 'Watch the travel toward the drawer, laptop and globe, as well as the clock contact. The first clock approach keeps its walking choice; recovery choices are unchanged in this pair.';
    } else if (update === 4) {
      heading = 'Update 4: changes across the route';
      watch = 'Follow the approaches between chores, then watch the arm pull away after contact. More choices change here, but a quicker withdrawal need not mean less joint travel.';
    } else if (update === 8 || update === 16) {
      heading = `Update ${update}: the plateau on this route`;
      watch = 'Compare the walking approaches and withdrawals with update 4. Updates 8 and 16 make the same categorical choices on this scenario; their small cost difference remains unexplained.';
      limit = 'Update 16 was selected across all three development scenarios. This one route uses 476 steps at update 8 and 482 at update 16, so the progression is not monotonic. The static-policy comparison still limits the claim.';
    }
  }
  if (efficiency && scenario.partition === 'held_out') {
    watch = 'Watch the walking approaches and final alignment before each reach. This is a fresh test of the already-selected checkpoint, not an intermediate training run.';
    limit = 'The checkpoint was frozen before these four final tests. All four policies passed all four cases; a training-derived static policy performed similarly. Use development scenarios to inspect updates 0, 1, 4, 8 and 16.';
  }
  const qualified = efficiency ? metadata.every(m => m.qualified_complete) : metadata.every(m => m.complete);
  if (!qualified) limit = `Completion and quality come first: a short failed run is not an efficiency improvement. ${limit}`;
  const choices = decisionsFor(episodes[1]);
  const points = [['Clock reach',d => d.domain === 'alarm'],['Laptop approach',d => d.domain === 'walk' && d.task === 'laptop'],['Arm withdrawal',d => d.domain === 'recovery' && d.task === 'laptop']];
  const moments = points.flatMap(([label,match]) => {const d=choices.find(match);return d ? [{label,time:d.t}] : [];});
  return {heading,changed,watch,limit,moments};
}
export function currentCue(episode, time) {
  if (time >= episode.duration) return {key:'finished',title:'Right recording finished',text:'The other run may still be moving. Let both recordings finish before comparing the route totals.'};
  const d = decisionsFor(episode).findLast(d => d.t <= time);
  if (!d) return {key:'settling',title:'Settling into the starting state',text:'Both recordings use the same simulated clock. They may reach the same task at different times.'};
  const task=names[d.task] || d.task || 'next task';
  if (d.domain === 'walk') return {key:d.key,title:`Right pane · approaching the ${task}`,text:d.task === 'alarm' ? 'Watch the book-edge foot placements and the alignment before the clock. Feet view makes those contacts easier to inspect.' : 'Watch the turns, travel and small alignment steps before the reach. Compare the accumulated step count as the route unfolds.'};
  if (d.domain === 'recovery') return {key:d.key,title:`Right pane · arm recovery after the ${task}`,text:'Watch the hand clear the object and the arm return. Compare time, contact and joint travel; a faster withdrawal can involve more movement.'};
  return {key:d.key,title:`Right pane · ${names[d.domain] || 'object'} contact`,text:'Watch the reach, contact and release. The controller-choice record shows which profile was selected; this clip alone does not isolate its contribution.'};
}
