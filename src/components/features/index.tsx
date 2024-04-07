"use client";

import { motion } from "framer-motion";
import { HoverCard } from "./card";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section>
      <section
        id="bento"
        className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-12 md:mt-16"
      >
        <div className="w-full h-[25rem] col-span-2 rounded-3xl border-2 p-3 lg:p-5 flex flex-row-reverse">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="hidden md:flex shrink-0 justify-center items-center mx-5">
            <Image
              src="/image/device.svg"
              alt="device"
              width={300}
              height={600}
              className="w-full h-full rounded-lg"
            />
          </motion.div>
          <div className="flex flex-col w-full">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-7xl tracking-tight">
              Self-Contained Operation
            </motion.h1>
            <div className="flex h-full w-full items-center justify-end">
              <motion.p variants={slideFromLeft} initial="hidden" whileInView="visible" className="desc">
                Sonicrypt is a standalone device that notifies on every solana
                transaction on sellers account. It doesn&apos;t rely on any
                third party service to operate, only on solana blockchain,
                making it a secure and reliable solution. Because of this, it
                has almost no downtime and is always up to date with the latest
                solana network changes.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="group relative w-full h-[25rem] rounded-3xl border-2 text-right flex flex-col justify-center items-center">
          <HoverCard text="450 ms" className="text-5xl" />
          <div className="abs-center w-full h-full opacity-100 group-hover:opacity-0 transition-all duration-100 delay-75 flex justify-center items-center z-[-100]">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl md:text-5xl lg:text-6xl font-heading text-center">Super fast response</motion.h1>
          </div>
        </div>
        <div className="group relative w-full h-[25rem] rounded-3xl border-2 text-right flex flex-col justify-center items-center">
          <HoverCard text="160 mA" className="text-5xl" />
          <div className="abs-center w-full h-full opacity-100 group-hover:opacity-0 transition-all duration-100 delay-75 flex justify-center items-center z-[-100]">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-center px-3">Low power consumption</motion.h1>
          </div>
        </div>
        <div className="w-full h-[25rem] col-span-2 rounded-3xl border-2 p-3 lg:p-5 flex">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="hidden md:flex shrink-0 justify-center items-center mx-5">
            <Image
              src="/image/emulator.png"
              alt="device"
              width={200}
              height={600}
              className="w-auto h-full rounded-lg"
            />
          </motion.div>
          <div className="flex flex-col w-full">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-7xl tracking-tight text-right">
              Built-in Emulator
            </motion.h1>
            <div className="flex h-full w-full items-center justify-end">
              <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="desc text-right">
                Sonicrypt app comes with a built-in emulator that allows you to
                experience sonicrypt device without needing to buy one or build
                one yourself. It is a great way to test out the device and see
                how it works before you decide to buy one. The emulator is a
                great way to learn how to use the device and get familiar with
                its features.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
