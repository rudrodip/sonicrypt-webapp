"use client";

import Hero from "@/components/hero";
import VideoPreview from "@/components/video-preview";
import dynamic from "next/dynamic";
import HeroDemo from "../(demo)/demo/page";

const MobileAppSection = dynamic(() => import("@/components/mobile-app"));
const Products = dynamic(() => import("@/components/products"));
const Specs = dynamic(() => import("@/components/specifications"));
const Workflow = dynamic(() => import("@/components/workflow"));
const CobeGlobe = dynamic(() => import("@/components/cobe"));
const Features = dynamic(() => import("@/components/features"));

export default function Home() {
  return (
    <div className="">
      <div className="w-full max-w-5xl mx-auto">
      <HeroDemo />
      </div>
      <div className="w-full mt-24 lg:mt-0 lg:min-h-screen flex justify-center items-center">
        <VideoPreview />
      </div>
      <div className="w-full min-h-screen">
        <Specs />
      </div>
      <div className="w-full min-h-screen">
        <Features />
      </div>
      <div className="w-full min-h-screen">
        <MobileAppSection />
      </div>
      <div className="hidden md:block w-full">
        <Workflow />
      </div>
      <div className="w-full min-h-screen">
        <Products />
      </div>
      <div className="w-full">
        <CobeGlobe />
      </div>
    </div>
  );
}