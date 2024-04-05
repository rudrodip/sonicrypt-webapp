"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionStyle } from "framer-motion";
import { Notifier } from "./notifier";
import { notifierConfig } from "./notifier.config";
import { Circle } from "./circle";
import { Module } from "./module";

export default function Device() {
  const scrollRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={scrollRef}
      style={{
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0.6]),
        scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
      }}
      className="hidden md:block relative rounded-md w-[768px] mx-auto aspect-[2/1] z-10"
    >
      <motion.div
        id="body"
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="relative w-full h-full rounded-md bg-[#ECECEC] pebble-shadow"
      >
        <motion.div className="h-full w-[576px] mx-auto flex justify-between items-center">
          <motion.div className="relative h-full w-14 border border-[#ECECEC] flex flex-col justify-between bg-[#DEDEDE] pebble-shadow">
            {notifierConfig.map((notifier, idx) => (
              <Notifier
                key={notifier.id}
                backgroundColor={notifier.backgroundColor}
                audioPath={notifier.audioPath}
              />
            ))}
            <motion.div
              id="red-button"
              className="bg-[#e55a6b] absolute w-full h-1 left-0 -bottom-1 rounded-b cursor-pointer"
            ></motion.div>
          </motion.div>
          <motion.div className="relative h-full w-52 flex justify-center items-center">
            <Module>
              <Circle />
            </Module>
            <motion.div
              id="button-container"
              className="absolute w-full h-1 left-0 -bottom-1 rounded-b flex justify-end gap-5"
            >
              <motion.div
                id="btn-1"
                className="w-14 h-full bg-[#807F84] cursor-pointer"
                whileTap={{ y: -1 }}
              ></motion.div>
              <motion.div
                id="btn-2"
                className="w-14 h-full bg-[#807F84] cursor-pointer"
                whileTap={{ y: -1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%] rounded-md w-full h-full scale-95 z-[-2] bg-slate-500/30 backdrop-blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.85 } }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[61%] rounded-md w-full h-full scale-90 z-[-3] bg-slate-600/20 backdrop-blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.9 } }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[66%] rounded-md w-full h-full scale-[0.85] z-[-4] bg-slate-700/10 backdrop-blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        className="abs-center relative w-[105%] h-[110%] border border-primary/40 border-dashed rounded-none z-[-100]"
      >
        <PlusSVG style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 90]) }} className="absolute -top-[13px] -left-[13px]" />
        <PlusSVG style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }} className="absolute -top-[13px] -right-[13px]" />
        <PlusSVG style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 90]) }} className="absolute -bottom-[13px] -left-[13px]" />
        <PlusSVG style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }} className="absolute -bottom-[13px] -right-[13px]" />
      </motion.div>
    </motion.div>
  );
}

const PlusSVG = ({ className, style }: { className: string, style?: MotionStyle }) => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={style}
      width="26"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
        y1="12.5"
        x2="25"
        y2="12.5"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
        x1="12"
        y1="25.5"
        x2="12"
        y2="0.5"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
    </motion.svg>
  );
};
