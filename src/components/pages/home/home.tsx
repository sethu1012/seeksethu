import React from 'react';

function HomePageComponent() {
  return (
    <div className="min-h-screen bg-grey-300 flex flex-col items-center justify-center">
      <img
        src="/next-assets/avatar.svg"
        className="w-32 sm:w-40 md:lg-48 lg:w-56 xl:w-64 rounded-full"
        alt="Sethuraman Srinivasan"
      />
      <h1 className="text-blue-600 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center">
        Sethuraman Srinivasan
      </h1>
    </div>
  );
}

export default HomePageComponent;
