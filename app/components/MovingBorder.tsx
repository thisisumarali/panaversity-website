"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo() {
  return (
    <div>
      <Link href="/">
        <Button
          borderRadius="1.75rem"
          className="bg-purple-900 text-slate-100 hover:text-green-100 border-neutral-200 dark:border-slate-800"
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
}
