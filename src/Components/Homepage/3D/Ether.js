/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useFrame } from 'react-three-fiber';

function Ether() {
  const myMesh = React.useRef();

  useFrame(() => {
    myMesh.current.rotation.y += 0.01;
    myMesh.current.rotation.x += 0.01;
  });

  return (

    <mesh ref={myMesh} position={[0, -1, 0]} scale={0.2}>
      <octahedronGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>

  );
}

export default Ether;
