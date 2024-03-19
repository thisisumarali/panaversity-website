import Image from "next/image";
import React from "react";
// "inline-block bg-gradient-to-r from-blue-300 via-green-500 to-accent bg-clip-text text-transparent"
const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 py-8 items-center lg:py-16 lg:px-16">
      <div className="py-12 px-8 lg:px-8 rounded-lg flex flex-col justify-center md:block">
        <h2 className="text-4xl lg:text-6xl bg-gradient-to-r font-bold from-blue-400 via-green-600 bg-clip-text text-transparent">
          Become A Certified Web 3.0 <br /> And Metaverse Developer
        </h2>
        <div>
          <button className="border px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-500 mt-4 w-auto">
            Get Started
          </button>
        </div>
      </div>
      <div className="rounded-lg px-8 md:px-12 flex justify-center md:block">
        <Image src="Team-pana.svg" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
