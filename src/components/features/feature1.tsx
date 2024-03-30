"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Device from "@/components/device";
import { Button } from "@/components/ui/button";
import DeviceVertical from "../device/device-vertical";

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

export default function Feature1() {
  const [isEmulated, setIsEmulated] = useState(false);

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="features"
      className="h-auto w-full mt-20 flex justify-between"
    >
      <motion.div className="w-full ml-16">
        <motion.h1 variants={item} className="head-text font-serif mb-5">
          01.
        </motion.h1>
        <motion.h1 variants={item} className="head-text-md">
          Auditory
        </motion.h1>
        <motion.h1 variants={item} className="head-text-md">
          Confirmation
        </motion.h1>
        <motion.p
          className="max-w-lg mt-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Blockchain transactions are silent, but secure.{" "}
          <span className="highlighted">Sonicrypt</span> provides you audiotory
          confirmation of both `confirmation` & `finalized` state of your
          transaction. No more checking the blockchain explorer every 5 minutes.
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
          </motion.p>
        </motion.div>

        <motion.div variants={variants} className="mt-10">
          <Button size="sm" onClick={() => setIsEmulated(true)}>
            Emulate
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 w-full flex justify-between items-center"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <DeviceVertical
          orientation="vertical"
          listenToKeyboard={false}
          listenToTx={true}
          triggerPlaying={isEmulated}
        />
      </motion.div>
    </motion.section>
  );
}
