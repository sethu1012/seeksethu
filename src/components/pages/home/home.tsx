import React from 'react';

function HomePageComponent() {
  return (
    <div className="min-h-screen bg-grey-300 flex flex-col items-center justify-center">
      <img
        src="/next-assets/avatar.svg"
        className="w-48 rounded-full"
        alt="Sethuraman Srinivasan"
      />
      <h1 className="text-blue-600 text-6xl text-center">
        Sethuraman Srinivasan
      </h1>
    </div>
  );
}

export default HomePageComponent;
