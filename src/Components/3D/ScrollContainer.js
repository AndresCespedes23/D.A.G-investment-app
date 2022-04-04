/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  useFrame((state, delta) => {
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      viewport.height * scroll.current,
      4,
      delta,
    );
    // Or: group.current.position.lerp(vec.set(0, viewport.height * scroll.current, 0), 0.1)
  });
  return <group ref={group}>{children}</group>;
}

export default ScrollContainer;
