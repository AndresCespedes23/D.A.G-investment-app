/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useFrame, useLoader } from 'react-three-fiber';

function Sphere() {
  const addLogo = useLoader(TextureLoader, 'bennu-icon.png');
  const myMesh = React.useRef();

  useFrame(() => {
    myMesh.current.rotation.y += 0.1;
  });

  return (
    <mesh ref={myMesh} position={[0, 0.9, 3.5]} scale={0.2}>
      <planeGeometry />
      <meshStandardMaterial map={addLogo} color="yellow" />
    </mesh>
  );
}

export default Sphere;
