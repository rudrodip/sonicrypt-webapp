"use client";

import Hero from "@/components/hero";
import MobileAppSection from "@/components/mobile-app";
import Specs from "@/components/specifications";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="w-full">
        <Workflow />
      </div>
      <div className="w-full min-h-screen">
        <Specs />
      </div>
      <div className="w-full min-h-screen">
        <MobileAppSection />
      </div>
      <div className="w-full min-h-screen"></div>
      <div className="w-full min-h-screen"></div>
    </div>
  );
}
