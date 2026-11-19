import * as THREE from 'three';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {SSAOPass} from 'three/addons/postprocessing/SSAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';

export function photographicRenderer({renderer,scene,camera,materials,joints,mesh,box,cyl,bar,text}){
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.toneMappingExposure=.95;
 scene.fog=new THREE.Fog('#c8c3b8',1.6,5);
 const lights=scene.children.filter(o=>o.isDirectionalLight);lights[0].intensity=3.0;lights[0].color.set('#fff2dc');lights[0].shadow.normalBias=.00012;lights[0].shadow.bias=-.000025;lights[0].shadow.radius=4;
 if(lights[1]){lights[1].intensity=.30;lights[1].color.set('#e3eaf0')}
 scene.children.filter(o=>o.isHemisphereLight).forEach(o=>o.intensity=.24);
 function noiseTexture(seed=821){const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d'),data=ctx.createImageData(512,512);let n=seed;for(let i=0;i<data.data.length;i+=4){n=(1664525*n+1013904223)>>>0;const v=115+(n>>>25);data.data[i]=data.data[i+1]=data.data[i+2]=v;data.data[i+3]=255}ctx.putImageData(data,0,0);return new THREE.CanvasTexture(c)}
 const grain=noiseTexture();grain.wrapS=grain.wrapT=THREE.RepeatWrapping;
 materials.shell.color.set('#e1e2dc');materials.shell.metalness=.08;materials.shell.roughness=.43;materials.shell.bumpMap=grain;materials.shell.bumpScale=.000025;
 materials.frame.color.set('#20272a');materials.frame.metalness=.76;materials.frame.roughness=.43;materials.frame.bumpMap=grain;materials.frame.bumpScale=.000014;
 materials.metal.color.set('#aab0b0');materials.metal.metalness=.95;materials.metal.roughness=.29;materials.metal.bumpMap=grain;materials.metal.bumpScale=.000008;
 materials.rubber.color.set('#182020');materials.rubber.metalness=0;materials.rubber.roughness=.94;materials.rubber.bumpMap=grain;materials.rubber.bumpScale=.00007;
 materials.accent.color.set('#b67149');materials.accent.roughness=.48;materials.accent.metalness=.28;
 materials.visor.color.set('#0c171d');materials.visor.metalness=.20;materials.visor.roughness=.12;materials.visor.clearcoat=.8;
 materials.led.emissiveIntensity=.35;
 // Full-size room references stay outside either contact workspace.
 box([4,4,.02],[0,0,-.76],new THREE.MeshStandardMaterial({color:'#78796f',roughness:.93}),scene,.002);
 box([3,.06,2],[0,1.1,.25],new THREE.MeshStandardMaterial({color:'#a8aaa1',roughness:.94}),scene,.004);
 for(const x of[-.50,.50])for(const y of[-.30,.30])box([.035,.035,.70],[x,y,-.39],new THREE.MeshStandardMaterial({color:'#373c3c',metalness:.75,roughness:.4}),scene,.001);
 const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
 const ao=new SSAOPass(scene,camera,1,1,16);ao.kernelRadius=.0065;ao.minDistance=.00002;ao.maxDistance=.003;composer.addPass(ao);composer.addPass(new OutputPass());
 const loader=new THREE.TextureLoader();const ready=Promise.all([
  new RGBELoader().loadAsync('assets/studio.hdr').then(hdr=>{hdr.mapping=THREE.EquirectangularReflectionMapping;const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromEquirectangular(hdr).texture;scene.environmentIntensity=.90;scene.environmentRotation.set(Math.PI/2,0,.9);scene.background=hdr;scene.backgroundRotation.copy(scene.environmentRotation);scene.backgroundBlurriness=.5;scene.backgroundIntensity=.32;pmrem.dispose()}),
  Promise.all(['oak-color.jpg','oak-normal.jpg','oak-roughness.jpg'].map(n=>loader.loadAsync('assets/'+n))).then(([color,normal,rough])=>{color.colorSpace=THREE.SRGBColorSpace;for(const map of[color,normal,rough]){map.wrapS=map.wrapT=THREE.RepeatWrapping;map.repeat.set(1.8,1.2);map.anisotropy=8}materials.wood.color.set('#d6d3cb');materials.wood.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n diffuseColor.rgb = mix(vec3(dot(diffuseColor.rgb, vec3(0.2126,0.7152,0.0722))), diffuseColor.rgb, 0.48);')};materials.wood.map=color;materials.wood.normalMap=normal;materials.wood.normalScale.set(.06,.06);materials.wood.roughnessMap=rough;materials.wood.roughness=.90;materials.wood.needsUpdate=true})
 ]);
 return{ready,render(){composer.render()},resize(w,h){composer.setSize(w,h);ao.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(camera.projectionMatrix);ao.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(camera.projectionMatrixInverse)}};
}
