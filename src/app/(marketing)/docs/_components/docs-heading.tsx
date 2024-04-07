"use client";

import { motion } from "framer-motion";

export const DocsHeading = () => {
  return (
    <>
      <motion.h1 className="text-center head-text-md tracking-tight mt-12 sm:mt-0">
        Developer Docs
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0, transition: { duration: 0.4, delay: 0.3 } }}
        className="text-center max-w-xl mx-auto font-sans font-semibold text-4xl md:text-5xl tracking-tight"
      >
        Let&apos;s{" "}
        <motion.span
          animate={{ backgroundColor: ["#ef4444", "#db2777"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          hop
        </motion.span>{" "}
        on to the{" "}
        <motion.span
          animate={{ backgroundColor: ["#db2777", "#ef4444"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          codebase
        </motion.span>{" "}
      </motion.p>
    </>
  );
};
