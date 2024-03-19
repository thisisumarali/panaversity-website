import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="md:py-16 py-8">
      <h2 className="text-center text-4xl font-extrabold text-[#242424]">
        Our Partners
      </h2>
      <div className="grid  grid-cols-2 md:grid-cols-4  gap-8 mx-auto px-16 pt-8 items-center">
        <Image
          src="/saylani.png"
          alt="Governorsindh"
          width={150}
          height={150}
          className="object-center"
        />
        <Image
          src="/governor.png"
          alt="Governorsindh"
          width={150}
          height={150}
          className="object-center"
        />
        <Image
          src="/piaic.png"
          alt="Governorsindh"
          width={120}
          height={120}
          className="object-center"
        />
        <Image
          src="/panaverse.png"
          alt="Governorsindh"
          width={150}
          height={150}
          className="object-center"
        />
      </div>
    </div>
  );
};

export default Partners;
