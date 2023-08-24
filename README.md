
Mesh volume calculator for Three or React Three. 

It requires a mesh geometry (object.children[0]) and returns volume in original units.
You may use 'precision' arg (optional) to avoid division by 1000 and calculate with greater precision, useful for smaller geometry.

1) Install: npm i three-volume
2) Import: import {ThreeVolume}  from 'three-volume' 
// const {ThreeVolume}  = require('three-volume');

3) Use: let volume = ThreeVolume({geometry:mesh.geometry,precision:true/false})

Hecho con amor en argentina.





