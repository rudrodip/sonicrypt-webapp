"use client";

import { motion } from "framer-motion";

export const HeadingText = () => {
  return (
    <>
      <motion.h1 className="text-center head-text tracking-tight">
        SONICRYPT
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0, transition: { delay: 0.7 } }}
        className="text-center max-w-xl mx-auto font-sans font-semibold text-4xl md:text-5xl tracking-tight"
      >
        Bring{" "}
        <motion.span
          animate={{ backgroundColor: ["#ef4444", "#db2777"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          sound
        </motion.span>{" "}
        and{" "}
        <motion.span
          animate={{ backgroundColor: ["#db2777", "#ef4444"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          sight
        </motion.span>{" "}
        to your <span className="gray">silent transactions</span>
      </motion.p>
    </>
  );
};
