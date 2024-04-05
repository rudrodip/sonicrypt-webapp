"use client";

import { motion } from "framer-motion";
import { Notifier } from "./notifier";
import { notifierConfig } from "./notifier.config";
import { Circle } from "./circle";
import { Module } from "./module";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Device() {
  const maxWidth = useMediaQuery("(max-width: 774px)");

  return (
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
      className="relative rounded-md w-[768px] mx-auto aspect-[2/1] bg-[#ECECEC] pebble-shadow z-10"
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
  );
}
