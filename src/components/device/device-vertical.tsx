"use client";

import { motion } from "framer-motion";
import { Notifier } from "./notifier";
import { notifierConfig } from "./notifier.config";
import { Circle } from "./circle";
import { Module } from "./module";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface DeviceProps {
  orientation: "horizontal" | "vertical";
  listenToKeyboard: boolean;
  listenToTx: boolean;
  triggerPlaying: boolean;
}

export default function DeviceVertical({
  orientation,
  listenToKeyboard,
  listenToTx,
  triggerPlaying,
}: DeviceProps) {
  const maxWidth = useMediaQuery("(max-width: 774px)");

  return (
    <motion.div
      id="body"
      className={cn(
        "relative rounded-md bg-[#ECECEC] pebble-shadow z-10",
        orientation === "horizontal"
          ? "w-[768px] mx-auto aspect-[2/1]"
          : "w-[384px] mx-auto aspect-[1/2]",
      )}
    >
      <motion.div
        className={cn(
          "w-full h-[576px] my-auto flex flex-col-reverse justify-between items-center",
        )}
      >
        <motion.div className="relative w-full h-14 border border-[#ECECEC] flex justify-between bg-[#DEDEDE] pebble-shadow">
          {notifierConfig.map((notifier, idx) => (
            <Notifier
              key={notifier.id}
              keyPress={notifier.key}
              backgroundColor={notifier.backgroundColor}
              audioPath={notifier.audioPath}
              listenToKeyboard={listenToKeyboard}
            />
          ))}
          <motion.div
            id="red-button"
            className="bg-[#e55a6b] absolute h-full w-1 bottom-0 -left-1 rounded-b cursor-pointer"
          ></motion.div>
        </motion.div>
        <motion.div className="relative h-full w-52 flex justify-center items-center">
          <Module
            triggerPlaying={triggerPlaying}
            listenToTx={listenToTx}
            listenToKeyboard={listenToKeyboard}
          >
            <Circle />
          </Module>
          <motion.div
            id="button-container"
            className="absolute h-full w-1 -left-1 bottom-0 rounded-b flex justify-end gap-5"
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
