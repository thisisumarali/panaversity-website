import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { MovingBorderDemo } from "./MovingBorder";

export function SpotlightPreview() {
  return (
    <div className="flex items-center justify-center h-screen bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <div className="p-4 max-w-7xl relative z-10">
        <h1 className="text-4xl md:text-7xl p-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-green-900 bg-opacity-50">
          Panaversity
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Panaversity is the world's first online university dedicated to
          empowering you to master the technologies shaping our future. We offer
          intensive online programs focused on Generative AI, Spatial Computing,
          Cloud Native Computing, and Web 3.0.
        </p>
        <div className="flex justify-center pt-3">
          <MovingBorderDemo />
        </div>
      </div>
    </div>
  );
}
