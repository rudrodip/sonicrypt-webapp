"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Device from "@/components/device";
import { Button } from "@/components/ui/button";

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

export default function Feature2() {
  const [isEmulated, setIsEmulated] = useState(false);

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="features"
      className="min-h-screen w-full mt-20 flex justify-between overflow-x-hidden"
    >
      <motion.div className="w-full">
        <motion.h1 variants={item} className="head-text font-serif mb-5">
          02.
        </motion.h1>
        <motion.h1 variants={item} className="head-text-md">
          Visual
        </motion.h1>
        <motion.h1 variants={item} className="head-text-md">
          Confirmation
        </motion.h1>
        <motion.p
          className="max-w-lg mt-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Along with auditory confirmation, Sonicrypt also provides visual
          confirmation of incoming transactions. Giving both seller and buyer a
          peace of mind.
        </motion.p>
        <motion.h1
          className="text-lg mt-20 font-serif underline italic"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How it works?
        </motion.h1>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="ml-2"
          viewport={{ once: true }}
        >
          <motion.p variants={item} transition={{ delay: 1 }}>
            1. Some send you assets through blockchain
          </motion.p>
          <motion.p variants={item} transition={{ delay: 2 }}>
            2. Sonicrypt listens to your account changes
          </motion.p>
          <motion.p variants={item} transition={{ delay: 3 }}>
            3. It notifies you whenever it detect assest incoming transactions
            through both audio and visual cues.
          </motion.p>
        </motion.div>

        <motion.div variants={variants} className="mt-10">
          <Button size="sm" onClick={() => setIsEmulated(true)}>
            Emulate
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 flex justify-between items-center"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Device
          orientation="vertical"
          listenToKeyboard={false}
          listenToTx={false}
          triggerPlaying={isEmulated}
        />
      </motion.div>
    </motion.section>
  );
}
