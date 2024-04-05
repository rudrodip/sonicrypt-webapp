"use client";

import { motion } from "framer-motion";
import ReactHowler from "react-howler";
import { useState } from "react";

export const Circle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      id="c"
      className="parent-c cursor-pointer"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.35 },
      }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 1.05, opacity: 0.9 }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <ReactHowler
        src="/audio/click-1.mp3"
        playing={isPlaying}
        onEnd={() => setIsPlaying(false)}
      />
      <motion.div
        className="child-c bg-secondary"
      ></motion.div>
    </motion.div>
  );
};
