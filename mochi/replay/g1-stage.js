import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// GLB uses glTF's Y-up convention. Each animated body gets a native Z-up
// wrapper so the recorded MuJoCo body transform can be used without retargeting.
export async function loadG1(scene){
 const file=await new GLTFLoader().loadAsync('assets/g1-mini.glb?v=g1-v4'),bindings={};
 for(const body of [...file.scene.children]){
  const name=body.userData.mujoco_body||body.name,wrapper=new THREE.Group();wrapper.name='physics:'+name;scene.add(wrapper);wrapper.add(body);body.rotation.set(Math.PI/2,0,0);bindings[name]=wrapper;
 }
 for(const object of Object.values(bindings))object.traverse(child=>{if(child.isMesh){child.castShadow=child.receiveShadow=true;if(child.material){child.material.envMapIntensity=1.0;child.material.needsUpdate=true}}});
 return bindings;
}
