import React from 'react';
import HeroSection from './HeroSection/index';
import SearchFilter from './SearchFilter/index';
import MainProduct from './MainProduct/index';
// import MobNavbar from './MobNavbar/index';
export default function index() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SearchFilter></SearchFilter>
      {/* <MobNavbar></MobNavbar> */}
      <MainProduct></MainProduct>
    </div>
  );
}
