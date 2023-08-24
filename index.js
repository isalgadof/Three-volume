import * as THREE from "three";

function calculateVolume({geometry,precision}) {
  let volumen = 0;
  const vertices = geometry.attributes.position.array;
  let indices = geometry.index ? geometry.index.array : null;
  function volumenTriangular(p1, p2, p3) {
    const v321 = p3.x * p2.y * p1.z;
    const v231 = p2.x * p3.y * p1.z;
    const v312 = p3.x * p1.y * p2.z;
    const v132 = p2.x * p1.y * p3.z;
    const v213 = p1.x * p3.y * p2.z;
    const v123 = p1.x * p2.y * p3.z;
    return (1.0 / 6.0) * (-v321 + v231 + v312 - v132 - v213 + v123);
  }
  
  if (!indices) {
    indices = Array.from({ length: vertices.length / 3 }, (_, i) => i);
  }

  for (let i = 0; i < indices.length; i += 3) {
    const a = new THREE.Vector3().fromArray(vertices, indices[i] * 3);
    const b = new THREE.Vector3().fromArray(vertices, indices[i + 1] * 3);
    const c = new THREE.Vector3().fromArray(vertices, indices[i + 2] * 3);
    volumen += volumenTriangular(a, b, c);
  }
  if(precision){
    return (Math.abs(volumen));

  }else{
    return (Math.abs(volumen/1000));
  }
}

export const ThreeVolume = calculateVolume;
