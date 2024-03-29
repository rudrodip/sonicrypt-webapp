"use client";

import { motion, stagger } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const HeadingText = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="overflow-hidden mx-20"
    >
      <motion.h1 variants={item} id="first-line" className="head-text">
        Building <motion.span className="highlighted">sound</motion.span>
      </motion.h1>
      <motion.h1 variants={item} id="second-line" className="head-text">
        & <motion.span className="highlighted">sight</motion.span> to silent
      </motion.h1>
      <motion.h1 variants={item} id="third-line" className="head-text">
        transactions
      </motion.h1>
    </motion.div>
  );
};
