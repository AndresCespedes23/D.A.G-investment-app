/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Sphere() {
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="#d6b400" wireframe />
    </mesh>
  );
}

export default Sphere;
