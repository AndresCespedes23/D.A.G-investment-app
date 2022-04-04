/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import * as THREE from 'three';
import React, { useRef, useState, useLayoutEffect } from 'react';
import niceColors from 'nice-color-palettes';

const length = 125000;
const o = new THREE.Object3D();
const c = new THREE.Color();
const colors = Array.from({ length }, () => niceColors[61][Math.floor(Math.random() * 75)]);

function Boxes() {
  const ref = useRef();
  const [colorArray] = useState(() => Float32Array.from(Array.from({ length }, (_, i) => c.set(colors[i]).convertSRGBToLinear().toArray()).flat()));
  useLayoutEffect(() => {
    let i = 0;
    for (let x = 0; x < 50; x++) {
      for (let y = 0; y < 50; y++) {
        for (let z = 0; z < 50; z++) {
          const id = i++;
          o.position.set(25 - x, 25 - y, 25 - z);
          o.updateMatrix();
          ref.current.setMatrixAt(id, o.matrix);
        }
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (

    <instancedMesh ref={ref} args={[null, null, length]}>
      <boxBufferGeometry args={[0.15, 0.15, 0.15]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshLambertMaterial vertexColors={THREE.VertexColors} toneMapped={false} />
    </instancedMesh>

  );
}

export default Boxes;
