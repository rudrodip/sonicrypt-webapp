"use client";

import {
  motion,
  useAnimate,
  useInView,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Notifier } from "@/components/device/notifier";
import { Module } from "@/components/device/module";
import { Circle } from "@/components/device/circle";
import { notifierConfig } from "@/components/device/notifier.config";

const texts = [
  "All in one device",
  "Auditory Confirmation",
  "Visual Confirmation",
  "BLE and Wifi support",
  "Dedicated mobile app",
];

export default function Specs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const [once, setOnce] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1, svgHeight * 0.8]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [0, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      setSvgHeight(sectionRef.current.clientHeight);
    }
  }, [sectionRef.current]);

  useEffect(() => {
    if (isInView && !once) {
      const timeOutId = setTimeout(() => {
        animation();
        setOnce(true);
      }, 500);

      return () => clearTimeout(timeOutId);
    }
  }, [isInView]);

  const animation = async () => {
    await animate("#body" as any, {
      scale: 1,
      opacity: 1,
      translateX: "-50%",
      translateY: "-50%",
      transition: { duration: 1, ease: "easeInOut" },
    });
    await animate("#n1" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    await animate("#n2" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    await animate("#n3" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    await animate("#n4" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    await animate("#module-container" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    await animate("#circle-container" as any, {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    await animate("#img" as any, {
      scale: 0.6,
      transition: { duration: 0.1, ease: "easeInOut" },
    });
    await animate("#body" as any, {
      scale: 0.9,
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col items-center justify-center bg-[url('/bg.svg')] bg-center bg-no-repeat my-16 md:my-24 lg:my-44"
    >
      <motion.div initial={{ y: 5 }} whileInView={{ y: -100 }} className="relative w-full">
        <motion.h1
          className="abs-center head-text-md text-center"
          initial={{
            opacity: 0,
            y: 20,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          key={currentIndex}
        >
          {texts[currentIndex]}
        </motion.h1>
      </motion.div>
      <div ref={scope} className="hidden md:block relative w-full max-w-2xl mx-auto">
        <motion.div id="img" className="w-full mx-auto">
          <Image
            src="/image/esp.png"
            alt="esp32"
            width={700}
            height={300}
            className="w-full mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{
            scale: 1.5,
            opacity: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
          id="body"
          className="abs-center w-full aspect-[2/1] bg-[#ECECEC] rounded-md"
        >
          <motion.div className="h-full w-[75%] mx-auto flex justify-between items-center">
            <motion.div className="relative h-full w-14 border border-[#ECECEC] flex flex-col justify-between pebble-shadow z-50">
              <motion.div
                id="n1"
                initial={{
                  scale: 4,
                  opacity: 0,
                }}
                className="w-full h-full"
              >
                <Notifier
                  backgroundColor={notifierConfig[0].backgroundColor}
                  audioPath={notifierConfig[0].audioPath}
                />
              </motion.div>
              <motion.div
                id="n2"
                initial={{
                  scale: 4,
                  opacity: 0,
                }}
                className="w-full h-full"
              >
                <Notifier
                  backgroundColor={notifierConfig[1].backgroundColor}
                  audioPath={notifierConfig[1].audioPath}
                />
              </motion.div>
              <motion.div
                id="n3"
                initial={{
                  scale: 4,
                  opacity: 0,
                }}
                className="w-full h-full"
              >
                <Notifier
                  backgroundColor={notifierConfig[2].backgroundColor}
                  audioPath={notifierConfig[2].audioPath}
                />
              </motion.div>
              <motion.div
                id="n4"
                initial={{
                  scale: 4,
                  opacity: 0,
                }}
                className="w-full h-full"
              >
                <Notifier
                  backgroundColor={notifierConfig[3].backgroundColor}
                  audioPath={notifierConfig[3].audioPath}
                />
              </motion.div>
              <motion.div
                id="red-button"
                className="bg-[#e55a6b] absolute w-full h-1 left-0 -bottom-1 rounded-b cursor-pointer"
              ></motion.div>
            </motion.div>
            <motion.div className="relative h-full w-52 flex justify-center items-center">
              <motion.div
                id="module-container"
                className="w-full h-full flex justify-center items-center"
                initial={{
                  scale: 2,
                  opacity: 0,
                }}
              >
                <Module>
                  <motion.div
                    id="circle-container"
                    className="w-full h-full flex justify-center items-center"
                    initial={{
                      scale: 2,
                      opacity: 0,
                    }}
                  >
                    <Circle />
                  </motion.div>
                </Module>
              </motion.div>
              <motion.div
                id="button-container"
                className="absolute w-full h-1 left-0 -bottom-1 rounded-b flex justify-end gap-5"
              >
                <motion.div
                  id="btn-1"
                  className="w-14 h-full bg-[#807F84] cursor-pointer"
                  whileTap={{ y: -1 }}
                ></motion.div>
                <motion.div
                  id="btn-2"
                  className="w-14 h-full bg-[#807F84] cursor-pointer"
                  whileTap={{ y: -1 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Image 
        src="/image/device.svg"
        alt="device"
        width={400}
        height={800}
        className="w-1/2 mx-auto md:hidden"
      />
      <motion.svg
        width="91"
        height={svgHeight}
        viewBox={`0 0 91 ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <motion.path
          d={`M1 1L73.5 74V${svgHeight * 0.8}`}
          stroke="url(#paint0_linear_124_6)"
          fill="None"
          transition={{
            duration: 10,
          }}
          className="motion-reduce:hidden"
          strokeWidth="1.25"
        />
        <motion.path
          d={`M2 ${svgHeight * 1}L90.5 ${svgHeight * 0.9}V${svgHeight * 0.3}`}
          stroke="url(#paint1_linear_124_6)"
          fill="None"
          transition={{
            duration: 10,
          }}
          className="motion-reduce:hidden"
          strokeWidth="1.25"
        />
        <defs>
          <motion.linearGradient
            id="paint0_linear_124_6"
            x1="37.25"
            y1="1"
            x2="37.25"
            y2={y1}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
            <stop stopColor="#18CCFC"></stop>
            <stop offset="0.325" stopColor="#6344F5"></stop>
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
          </motion.linearGradient>
          <motion.linearGradient
            id="paint1_linear_124_6"
            x1="54.25"
            y1={y2}
            x2="54.25"
            y2="182"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
            <stop stopColor="#18CCFC"></stop>
            <stop offset="0.325" stopColor="#6344F5"></stop>
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        width="91"
        height={svgHeight}
        viewBox={`0 0 91 ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 scale-x-[-1]"
      >
        <motion.path
          d={`M1 1L73.5 74V${svgHeight * 0.8}`}
          stroke="url(#paint0_linear_124_6)"
        />
        <motion.path
          d={`M2 ${svgHeight * 1}L90.5 ${svgHeight * 0.9}V${svgHeight * 0.3}`}
          stroke="url(#paint1_linear_124_6)"
        />
      </motion.svg>
    </section>
  );
}
