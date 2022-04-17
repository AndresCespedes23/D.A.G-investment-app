/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

function Spinner() {
  return (
    <ThreeCircles
      color="red"
      height={200}
      width={200}
      outerCircleColor="rgba(184, 148, 50, 0.95)"
      middleCircleColor="rgba(184, 148, 50, 0.95)"
      innerCircleColor="rgba(184, 148, 50, 0.95)"
    />
  );
}

export default Spinner;
