import React from 'react';
import { NextSeo } from 'next-seo';
import HomePageComponent from 'src/components/pages/home/home';

function HomePage() {
  return (
    <>
      <NextSeo title="Sethuraman Srinivasan" />
      <HomePageComponent />
    </>
  );
}

export default HomePage;
