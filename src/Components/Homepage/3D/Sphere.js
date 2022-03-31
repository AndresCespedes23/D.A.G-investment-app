/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Instances, Instance } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

function Sphere() {
  const myMesh = React.useRef();

  useFrame(() => {
    myMesh.current.rotation.x += 0.075;
  });

  return (
    <mesh ref={myMesh}>
      <Instances>
        <icosahedronGeometry />
        <meshStandardMaterial />
        <Instance
          color="yellow"
          scale={0.1}
          position={[3, 0, 1]}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <Instance
          color="yellow"
          scale={0.2}
          position={[-3, 0, 1]}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <Instance
          color="yellow"
          scale={0.3}
          position={[-3, 0, -1]}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <Instance
          color="yellow"
          scale={0.4}
          position={[-3, 1, 1]}
          rotation={[Math.PI / 3, 0, 0]}
        />
        <Instance
          color="yellow"
          scale={0.5}
          position={[-3, -1, 1]}
          rotation={[Math.PI / 3, 0, 0]}
        />
      </Instances>
    </mesh>
  );
}

export default Sphere;
