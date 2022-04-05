/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import * as THREE from 'three';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import niceColors from 'nice-color-palettes';

const length = 125000;
const o = new THREE.Object3D();
const c = new THREE.Color();
const colors = Array.from({ length }, () => niceColors[61][Math.floor(Math.random() * 5)]);

function Ether() {
  const myMesh = React.useRef();

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

  useFrame(() => {
    myMesh.current.rotation.y += 0.001;
    myMesh.current.rotation.x += 0.001;
    myMesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={myMesh}>
      <instancedMesh ref={ref} args={[null, null, length]}>
        <sphereBufferGeometry args={[0.15, 0.15, 0.15]}>
          <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
        </sphereBufferGeometry>
        <meshLambertMaterial vertexColors={THREE.VertexColors} toneMapped={false} />
      </instancedMesh>
    </mesh>

  );
}

export default Ether;
