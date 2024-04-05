"use client";

import Hero from "@/components/hero";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <div className="px-2 md:px-10">
      <Hero />
      <div className="w-full min-h-screen">
        <Workflow />
      </div>
      <div className="w-full min-h-screen"></div>
    </div>
  );
}
