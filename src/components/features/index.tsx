"use client";

import { motion } from "framer-motion";
import { EvervaultCard } from "./card";

export default function Features() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="head-text-md text-center"
      >
        Sonicrypt
      </motion.h1>
      <section id="bento" className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-center mt-12 md:mt-16">
        <div className="w-full h-[25rem] lg:col-span-2 rounded-3xl border-2"></div>
        <div className="group relative w-full h-[25rem] rounded-3xl border-2 text-right flex flex-col justify-center items-center">
          <EvervaultCard className="text-5xl" />
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-100 delay-75">
            
          </div>
        </div>
        <div className="w-full h-[25rem] rounded-3xl border-2 text-right flex flex-col justify-center items-center">
          <EvervaultCard className="text-5xl" />
        </div>
        <div className="w-full h-[25rem] lg:col-span-2 rounded-3xl border-2"></div>
      </section>
    </section>
  );
}
