"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type StepsProps = {
  steps: string[];
};

export default function Steps({ steps }: StepsProps) {
  return (
    <>
      {steps.map((step, index) => {
        return (
          <motion.p
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl max-w-xl"
          >
            {`${index + 1}. ${step}`}
          </motion.p>
        );
      })}
    </>
  );
}
