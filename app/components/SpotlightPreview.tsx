import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { MovingBorderDemo } from "./MovingBorder";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="flex items-center justify-center h-screen sm:h-[80vh] content-center bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4  justify-center">
        <div className="mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[5em] py-1 font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-purple-900 bg-opacity-100">
            Panaversity
          </h1>
          <h3 className="text-2xl py-1 font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-purple-900 bg-opacity-100">
            Shape the world with the most cutting-edge technologies.
          </h3>
          <p className="mt-4 mr-3 font-normal text-base text-[#555] max-w-lg text-center sm:text-left mx-2">
            Panaversity is the world's first online university dedicated to
            empowering you to master the technologies shaping our future. We
            offer intensive online programs focused on Generative AI, Spatial
            Computing, Cloud Native Computing, and Web 3.0.
          </p>
          <div className="flex justify-center sm:justify-start pt-3">
            <MovingBorderDemo />
          </div>
        </div>
        <div>
          <Image
            src="/panaverse-daometa.jpg"
            alt="panaverse dao image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
