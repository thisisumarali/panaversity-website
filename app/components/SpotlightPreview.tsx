import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { MovingBorderDemo } from "./MovingBorder";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="flex items-center justify-center h-screen bg-white antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-4 max-w-7xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl py-1 font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-purple-900 bg-opacity-50">
            Panaversity
          </h1>
          <p className="mt-4 mr-3 font-normal text-base text-[#555] max-w-lg text-left mx-auto">
            Panaversity is the world's first online university dedicated to
            empowering you to master the technologies shaping our future. We
            offer intensive online programs focused on Generative AI, Spatial
            Computing, Cloud Native Computing, and Web 3.0.
          </p>
          <div className="flex justify-left pt-3">
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
