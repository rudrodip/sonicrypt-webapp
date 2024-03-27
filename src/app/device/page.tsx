"use client";

import { Separator } from "@/components/ui/separator";
import { useDimension } from "@/hooks/useDimension";
import { motion } from "framer-motion";
import { DefaultGlyphButton } from "@/components/glyph-button";

export default function Device() {
  const { width, height } = useDimension();

  return (
    <motion.section
      id="device"
      className="flex justify-between gap-12 items-center w-full min-h-screen"
    >
      <motion.div
        id="body"
        className="device-body"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="elements-container">
          <motion.div className="notifier-box">
            <motion.div
              className="notifier-box"
              whileHover={{
                backgroundColor: "#f54269",
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <Separator className="notifier-separator" />
            <motion.div
              className="notifier-box"
              whileHover={{
                backgroundColor: "#cbf542",
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <Separator className="notifier-separator" />
            <motion.div
              className="notifier-box"
              whileHover={{
                backgroundColor: "#42f55a",
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <Separator className="notifier-separator" />
            <motion.div
              className="notifier-box"
              whileHover={{
                backgroundColor: "#42aaf5",
                transition: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div id="red-button" className="red-button"></motion.div>
          </motion.div>
          <motion.div className="module-container">
            <motion.div
              id="module"
              className="module z-20"
              whileHover={{
                backgroundColor: "#BAF2BB",
                transition: { duration: 1 },
              }}
            >
              <motion.div
                id="c"
                className="parent-c cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.35 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="child-c"
                  animate={{
                    backgroundColor: ["#807F84", "#BAF2BB"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
            <motion.div id="button-container" className="button-container">
              <motion.div id="btn-1" className="device-button" whileTap={{ y: -1 }}></motion.div>
              <motion.div id="btn-2" className="device-button" whileTap={{ y: -1 }}></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
