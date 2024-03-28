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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, rotate: maxWidth ? -90 : 0 }}
      transition={{ duration: 1 }}
      className="device-body"
    >
      <motion.div className="elements-container">
        <motion.div className="notifier-box">
          {notifierConfig.map((notifier, idx) => (
            <Notifier
              key={notifier.id}
              keyPress={notifier.key}
              backgroundColor={notifier.backgroundColor}
              audioPath={notifier.audioPath}
            />
          ))}
          <motion.div id="red-button" className="red-button"></motion.div>
        </motion.div>
        <motion.div className="module-container">
          <Module>
            <Circle />
          </Module>
          <motion.div id="button-container" className="button-container">
            <motion.div
              id="btn-1"
              className="device-button"
              whileTap={{ y: -1 }}
            ></motion.div>
            <motion.div
              id="btn-2"
              className="device-button"
              whileTap={{ y: -1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
