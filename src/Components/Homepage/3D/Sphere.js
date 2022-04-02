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
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshStandardMaterial color="yellow" map={addLogo} />
    </mesh>
  );
}

export default Sphere;
