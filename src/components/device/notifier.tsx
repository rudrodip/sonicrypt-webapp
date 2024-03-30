"use client";

import { motion } from "framer-motion";
import ReactHowler from "react-howler";
import { useState, useEffect, useRef } from "react";

type NotifierProps = {
  keyPress: string;
  backgroundColor: string;
  audioPath: string;
  listenToKeyboard: boolean;
};

export const Notifier = ({
  keyPress,
  backgroundColor,
  audioPath,
  listenToKeyboard,
}: NotifierProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<ReactHowler>(null);

  useEffect(() => {
    if (!listenToKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === keyPress.toLowerCase()) {
        if (audioRef.current) {
          audioRef.current.seek(0);
        }
        setIsPlaying(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyPress, isPlaying, listenToKeyboard]);

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
