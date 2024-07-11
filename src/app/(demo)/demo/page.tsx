import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Model } from "../_components/model";

export default function HeroDemo() {
  return (
    <div className="w-full h-[80dvh] flex justify-between items-center">
      <div className="w-1/2 flex flex-col gap-5">
        <div className="relative max-w-[15rem] py-1 px-4 rounded-full flex items-center gap-2 bg-secondary text-sm cursor-pointer group/intro">
          <p>Introducing sonicrypt</p>
          <ChevronRight size={15} className="duration-100 transition-transform transform-gpu ease-out group-hover/intro:translate-x-1" />
          <div className="absolute rounded-full w-[calc(100%+1px)] h-[calc(100%+1px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-200 to-slate-500 -z-10"></div>
        </div>
        <h1 className="text-5xl md:text-[4.2rem]">Bring <span className="primary-gradient">sound</span> and<br /> <span className="primary-gradient">sight</span> to your silent<br /> transactions</h1>
        <div className="flex gap-4 items-center mt-5">
          <Button size="lg" className="rounded-full flex items-center gap-3 group/cta">
            <span>Get started</span>
            <ChevronRight size={15} className="duration-100 transition-transform transform-gpu ease-out group-hover/cta:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full">Documentation</Button>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <Model />
      </div>
    </div>
  )
}