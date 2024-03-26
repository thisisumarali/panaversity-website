import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2  w-full mxauto ">
      {/* Left Column */}
      <div className="py-12 px-8 lg:px-8 rounded-lg flex-col  ">
        <h2 className="text-5xl lg:text-6xl bg-gradient-to-r font-bold from-blue-400 via-green-600 bg-clip-text text-transparent">
          Become A Certified Web 3.0 <br /> And Metaverse Developer
        </h2>
        <div>
          <button className="border px-6 py-3 mt-3 rounded-lg text-white bg-green-600 hover:bg-green-500 ">
            Get Started
          </button>
        </div>
      </div>
      {/* Right Column */}
      <div className="rounded-full bg-gray-200 w-[400px] h-[400px] ">
        <Image
          src="/Team-pana.svg" // Assuming Team-pana.svg is in the public folder
          alt="hero"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
