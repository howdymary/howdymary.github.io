import * as THREE from 'three';

// The pinned Sand3D/NVIDIA shell is rigid upstream. Its native hammer and stem
// are retargeted as this benchmark's physical alarm silencer, not a hardware claim.
export function vintageClock({clock,cap,mesh,ball,cyl,bar,asset}) {
 asset('sand-clock-case.glb',clock);asset('sand-clock-stop.glb',cap);
 const brass=new THREE.MeshStandardMaterial({color:'#b6a079',metalness:.86,roughness:.3}),ink=new THREE.MeshStandardMaterial({color:'#303b35',roughness:.5}),red=new THREE.MeshStandardMaterial({color:'#9b4c37',roughness:.5});
 const center=[.025,-.0434,-.001679],radius=.0495;
 const paper=document.createElement('canvas');paper.width=paper.height=1024;const c=paper.getContext('2d');c.fillStyle='#ece5d5';c.fillRect(0,0,1024,1024);
 let seed=731;for(let i=0;i<7000;i++){seed=(seed*1664525+1013904223)>>>0;const x=seed%1024;seed=(seed*1664525+1013904223)>>>0;c.fillStyle='rgba(98,79,48,.035)';c.fillRect(x,seed%1024,2,2)}
 c.translate(512,512);c.strokeStyle='#454a43';for(let i=0;i<60;i++){const a=i*Math.PI/30,r=i%5?448:425;c.lineWidth=i%5?3:7;c.beginPath();c.moveTo(Math.sin(a)*r,-Math.cos(a)*r);c.lineTo(Math.sin(a)*466,-Math.cos(a)*466);c.stroke()}
 c.fillStyle='#303b35';c.font='500 119px Georgia, serif';c.textAlign='center';c.textBaseline='middle';for(let i=1;i<=12;i++){const a=i*Math.PI/6;c.fillText(String(i),Math.sin(a)*340,-Math.cos(a)*340+4)}c.font='29px Georgia, serif';c.fillStyle='#6c7064';c.fillText('M O C H I',0,155);c.font='22px Georgia, serif';c.fillText('MECHANICAL ALARM',0,201);
 const texture=new THREE.CanvasTexture(paper);texture.colorSpace=THREE.SRGBColorSpace;const face=mesh(new THREE.CircleGeometry(radius,96),new THREE.MeshStandardMaterial({map:texture,roughness:.78}),clock,center);face.rotation.x=Math.PI/2;
 const ring=mesh(new THREE.TorusGeometry(radius+.0014,.0008,12,96),brass,clock,[center[0],center[1]+.0002,center[2]]);ring.rotation.x=Math.PI/2;
 const point=(x,z,depth=0)=>[center[0]+x,center[1]-.0007-depth,center[2]+z];bar(point(0,0),point(-.015,-.026),.0014,ink,clock);bar(point(0,0,.0006),point(0,.039,.0006),.00095,ink,clock);bar(point(-.006,.003,.0012),point(.032,-.018,.0012),.00028,red,clock);cyl(.0026,.0012,point(0,0,.0018),brass,clock,'y');
 const indicator=new THREE.MeshStandardMaterial({color:'#a45439',emissive:'#000000',emissiveIntensity:0});ball(.0012,point(.023,-.031,.0004),indicator,clock);return indicator;
}
