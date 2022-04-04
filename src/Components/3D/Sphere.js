/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useFrame, useLoader } from 'react-three-fiber';

function Sphere() {
  const addLogo = useLoader(TextureLoader, 'bennu-icon.png');
  const myMesh = React.useRef();

  useFrame(() => {
    myMesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={myMesh} position={[0, 1.7, 0]}>
      <planeGeometry />
      <meshStandardMaterial map={addLogo} color="yellow" />
    </mesh>
  );
}

export default Sphere;
