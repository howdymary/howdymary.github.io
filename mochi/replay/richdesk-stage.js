import * as THREE from 'three';

export function addRichDesk({spec,group,asset,box,cyl,bar,text,scene,mesh}){
 const paper=new THREE.MeshStandardMaterial({color:'#ded8c7',roughness:.92});
 const ink=new THREE.MeshStandardMaterial({color:'#596057',roughness:.9});
 const tray=new THREE.MeshStandardMaterial({color:'#262d30',roughness:.5});
 const ceramic=new THREE.MeshPhysicalMaterial({color:'#d9d5c6',roughness:.22,clearcoat:.6});
 function line(points,parent,material=ink){const g=new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Line(g,new THREE.LineBasicMaterial({color:material.color}));parent.add(o);return o}
 for(const p of spec.props){
  const g=group(p.name,p.pos);g.rotation.z=p.yaw;const [sx,sy,sz]=p.size;
  if(!['paper','sticky','tray'].includes(p.asset)){
   asset('richdesk/'+p.asset+'.glb',g,p.size,[0,0,0],model=>{
    model.traverse(o=>{if(!o.isMesh)return;const mats=Array.isArray(o.material)?o.material:[o.material];o.material=mats.map(m=>{
     const n=m.clone();if(p.asset==='book'){if((n.color.r+n.color.g+n.color.b)/3<.3)n.color.set(p.color||'#455563');n.roughness=.82}
     if(p.asset==='mug')return ceramic;return n});if(!Array.isArray(o.material)||mats.length===1)o.material=o.material[0]});
   });
  }else box(p.size,[0,0,sz/2],p.asset==='tray'?tray:p.asset==='sticky'?new THREE.MeshStandardMaterial({color:'#d1bc77',roughness:1}):paper,g,.00015);
  if(p.asset==='book'){
   text(p.title||'NOTES',[0,-sy/2-.0002,sz*.5],sx*.66,g,'#cfc8b1',Math.min(.0023,sz*.3));
   for(let j=1;j<7;j++)line([[-sx*.47,-sy/2+.0003,sz*(.15+j*.105)],[sx*.47,-sy/2+.0003,sz*(.15+j*.105)]],g);
  }
  if(p.asset==='paper'){
   for(let j=0;j<9;j++){let y=sy*.31-j*sy*.066;line([[-sx*.35,y,sz+.00006],[sx*(j%3?.25:.05),y,sz+.00006]],g)}
   line(Array.from({length:18},(_,i)=>[-sx*.32+i*sx*.035,-sy*.35+sy*.07*Math.sin(i*.65)+i*sy*.005,sz+.00008]),g);
  }
  if(p.asset==='notebook'){
   box([.16,.11,.00015],[.004,0,sz+.0001],paper,g,.0001);
   for(let j=0;j<7;j++)line([[-.061,.036-j*.008,sz+.0003],[.018+(j%2?.014:0),.036-j*.008,sz+.0003]],g);
   line([[-.038,-.034,sz+.0004],[-.014,-.018,sz+.0004],[.018,-.032,sz+.0004],[.047,-.006,sz+.0004]],g);
  }
  if(p.asset==='mug')cyl(.028,.0004,[0,0,sz*.81],new THREE.MeshPhysicalMaterial({color:'#28160c',roughness:.25}),g);
 }
 const lamp=new THREE.Group();scene.add(lamp);lamp.position.set(-.47,.29,.015);lamp.rotation.z=.3;asset('sand-desk-lamp.glb',lamp);
 const stains=new THREE.Group();scene.add(stains);const mug=spec.props.find(p=>p.asset==='mug');const center=mug?[mug.pos[0]-.015,mug.pos[1]-.008]:[-.005,.318];
 for(let k=0;k<2;k++){const points=Array.from({length:145},(_,i)=>[center[0]+.036*Math.cos(k*.16+i*Math.PI/90),center[1]+.036*Math.sin(k*.16+i*Math.PI/90),.0002]);line(points,stains,new THREE.MeshStandardMaterial({color:'#987f5e'}));}
}
