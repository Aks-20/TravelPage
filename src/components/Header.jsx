import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/background.jpg')`, // Replace with actual image path
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
        <h1 className="text-5xl font-bold leading-tight max-w-2xl">
          Discover Your Next <br /> Adventure
        </h1>
        <p className="text-lg mt-4 max-w-xl">
          Choose from our curated experiences, customized for every kind of traveler.
        </p>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-semibold py-1 px-4 rounded-full shadow-md w-fit">
          BOOK NOW
        </button>
      </div>

      {/* Bottom Bar */}
     
    </div>
  );
};

export default HeroSection;
