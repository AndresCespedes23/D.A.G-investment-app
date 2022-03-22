/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import Fundamentals from '../Components/NftEducation/Fundamentals';
import Minting from '../Components/NftEducation/Minting';
import Ownership from '../Components/NftEducation/Ownership';
import Security from '../Components/NftEducation/Security';
import UseCases from '../Components/NftEducation/UseCases';
import ScrollToTop from './ScrollToTop';

function Pages() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nft-education/fundamentals" element={<Fundamentals />} />
        <Route path="/nft-education/ownership" element={<Ownership />} />
        <Route path="/nft-education/minting" element={<Minting />} />
        <Route path="/nft-education/security" element={<Security />} />
        <Route path="/nft-education/use-cases" element={<UseCases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
