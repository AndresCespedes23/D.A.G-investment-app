/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// Three Js
import { Canvas } from '@react-three/fiber';

function ThreeScene({ children }) {
  return (
    <Canvas>
      {children}
    </Canvas>
  );
}

export default ThreeScene;
