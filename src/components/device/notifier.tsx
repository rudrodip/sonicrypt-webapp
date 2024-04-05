"use client";

import { motion } from "framer-motion";
import ReactHowler from "react-howler";
import { useState, useEffect, useRef } from "react";

type NotifierProps = {
  backgroundColor: string;
  audioPath: string;
};

export const Notifier = ({
  backgroundColor,
  audioPath,
}: NotifierProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<ReactHowler>(null);

  return (
    <motion.div
      className="relative h-full w-14 border border-[#ECECEC] flex flex-col justify-between bg-[#DEDEDE] pebble-shadow"
      whileHover={{
        backgroundColor,
      }}
      animate={{
        backgroundColor: isPlaying ? backgroundColor : "#DEDEDE",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <ReactHowler
        src={audioPath}
        playing={isPlaying}
        onEnd={() => setIsPlaying(false)}
        ref={audioRef}
      />
    </motion.div>
  );
};
