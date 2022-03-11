/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import NftEducation from '../Components/NftEducation';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nft-information" element={<NftEducation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
