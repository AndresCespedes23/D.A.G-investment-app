/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useFrame } from 'react-three-fiber';

function Sphere() {
  const myMesh = React.useRef();

  useFrame(() => {
    myMesh.current.rotation.y += 0.075;
  });

  return (
    <mesh ref={myMesh}>
      <torusGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}

export default Sphere;
