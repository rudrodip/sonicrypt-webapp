"use client";

import { motion } from "framer-motion";
import { VideoJs } from "@/components/video-component";
import { HoverBorderGradient } from "../gradient-button";

const appFeatures = [
  "Connects with device via BLE",
  "Configure device settings",
  "View device status & logs",
  "Shows recent transactions",
  "Device emulator",
];

export default function MobileAppSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="w-full h-full flex flex-col justify-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="head-text-md lg:mb-20"
          >
            Sonicrypt app
          </motion.h1>
          <motion.div className="mt-6 flex flex-col justify-center">
            {appFeatures.map((feature, index) => (
              <motion.p
                key={index}
                className="font-sans tracking-tight font-semibold text-2xl lg:text-4xl py-1 md:py-3 ml-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: -20,
                  x: 20,
                  transition: { duration: 0.25, delay: index * 0.125 },
                }}
              >
                {`> `}
                {feature}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 20,
                x: 0,
                scale: 1.2,
                transition: { duration: 0.25 },
              }}
              className="ml-12 md:ml-16 lg:ml-32"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <a href="https://github.com/Sonicrypt/sonicrypt-app/releases" target="_blank">Download</a>
              </HoverBorderGradient>
            </motion.div>
            {/* <div className="md:hidden my-12 w-full justify-center items-center">
              <FloatingPhone />
            </div> */}
          </motion.div>
        </div>
        <div className="flex h-full justify-center items-center w-full md:w-auto mx-auto mt-12 md:mt-0">
          <FloatingPhone />
        </div>
      </div>
    </section>
  );
}

const FloatingPhone = () => {
  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
      }}
      initial={{
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      whileInView={{
        transform: "rotateY(0deg) rotateX(0deg)",
      }}
      transition={{
        duration: 1,
      }}
      className="rounded-[24px]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        whileInView={{
          transform: "translateZ(0px) translateY(0px)",
        }}
        transition={{
          duration: 1,
        }}
        className="relative w-[300px] aspect-[1/2] flex flex-col border-4 rounded-lg justify-between items-center bg-zinc-900 mx-auto"
      >
        <div
          id="punch-hole-camera"
          className="absolute w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700 left-3 top-3 z-10"
        />
        <VideoJs
          options={{
            muted: true,
            sources: [
              {
                src: "https://firebasestorage.googleapis.com/v0/b/collabsync-yt.appspot.com/o/sonicrypt-demo.webm?alt=media&token=dc105662-fd7c-44a5-bb76-db9a3ba25693",
                type: "video/mp4",
              },
            ],
          }}
          fallbackImageUrl="/logo.png"
        />
      </motion.div>
    </motion.div>
  );
};
