"use client";
import Hero from "@/components/hero";
import VideoPreview from "@/components/video-preview";
import SolanaGlobe from "@/components/globe";
import dynamic from "next/dynamic";

const MobileAppSection = dynamic(() => import("@/components/mobile-app"));
const Products = dynamic(() => import("@/components/products"));
const Specs = dynamic(() => import("@/components/specifications"));
const Workflow = dynamic(() => import("@/components/workflow"));

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="w-full mt-24 lg:mt-0 lg:min-h-screen flex justify-center items-center">
        <VideoPreview />
      </div>
      <div className="w-full">
        <Workflow />
      </div>
      <div className="w-full min-h-screen">
        <Specs />
      </div>
      <div className="w-full min-h-screen">
        <MobileAppSection />
      </div>
      <div className="w-full min-h-screen">
        <Products />
      </div>
      <div className="w-full min-h-screen">
        <SolanaGlobe />
      </div>
    </div>
  );
}