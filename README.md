
Mesh volume calculator for Three or React Three. 

It requires a mesh geometry (object.children[0]) and returns volume in original units. 
You may use 'precision' arg (optional) to avoid division by 1000 and calculate with greater precision, useful for smaller geometry.

1) Install: npm i three-volume
2) Import: import {ThreeVolume}  from 'three-volume' 
// const {ThreeVolume}  = require('three-volume');

3) Use: let volume = ThreeVolume({geometry:mesh.geometry,precision:true/false})


If you are trying to pass a geometry object without standard properties (such as position), you may invoke a new Mesh() object, and type-cast as such:

const mesh = new Mesh(file, new MeshBasicMaterial()); //You can use any material, defaulting to a basic one for simplicity
const volume = ThreeVolume(mesh as unknown as BufferGeometry);


Hecho con amor en argentina.





