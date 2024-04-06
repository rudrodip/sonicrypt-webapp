"use client";

import Image from "next/image";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import PhoneAnimation from "./phone";
import { PlusSVG } from "@/components/device";
import { useRef } from "react";
import { useDimension } from "@/hooks/useDimension";

export default function Workflow() {
  const { width } = useDimension();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [190, 50]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [300, 50]), {
    stiffness: 500,
    damping: 90,
  });

  const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [800, 0]), {
    stiffness: 500,
    damping: 90,
  });

  const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [150, 50]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.section style={{ scale: (width > 865 ? 1 : width / 900) }} className="relative">
      <h1 className="hidden sm:block head-text-md text-center mb-12">Instant feedback</h1>
      <motion.div ref={ref} className="relative w-full h-full flex items-center justify-center gap-32 lg:gap-44">
        <div id="phone-container" className="flex justify-center items-center">
          <PhoneAnimation />
        </div>
        <div
          id="blockchain"
          className="h-full flex justify-center items-center"
        >
          <div className="relative p-5 border aspect-square flex justify-center items-center bg-background hover:bg-gradient-to-b hover:from-zinc-800 hover:to-slate-800">
            <svg
              width="101"
              height="88"
              viewBox="0 0 101 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z"
                fill="url(#paint0_linear_174_4403)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_174_4403"
                  x1="8.52558"
                  y1="90.0973"
                  x2="88.9933"
                  y2="-3.01622"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stop-color="#9945FF" />
                  <stop offset="0.3" stop-color="#8752F3" />
                  <stop offset="0.5" stop-color="#5497D5" />
                  <stop offset="0.6" stop-color="#43B4CA" />
                  <stop offset="0.72" stop-color="#28E0B9" />
                  <stop offset="0.97" stop-color="#19FB9B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2">
              <h1 className="font-link text-lg text-center">~400 ms</h1>
            </div>
            <PlusSVG
              className="absolute -top-[13px] -left-[13px]"
              style={{ scale: 0.4 }}
            />
            <PlusSVG
              className="absolute -top-[13px] -right-[13px]"
              style={{ scale: 0.4 }}
            />
            <PlusSVG
              className="absolute -bottom-[13px] -left-[13px]"
              style={{ scale: 0.4 }}
            />
            <PlusSVG
              className="absolute -bottom-[13px] -right-[13px]"
              style={{ scale: 0.4 }}
            />
          </div>
        </div>
        <div id="device" className="h-[300px] shrink-0 flex justify-between items-center">
          <Image
            src="/image/device.svg"
            alt="device"
            width={150}
            height={700}
          />
        </div>
        <div className="abs-center -z-50">
          <motion.svg
            width="811"
            height="479"
            viewBox="0 0 811 479"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g id="linear">
              <motion.path
                id="Vector 1"
                d="M1 1C209 164.2 627.667 200 811 197.5"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
                transition={{
                  duration: 10,
                }}
              />
              <motion.path
                id="Vector 2"
                d="M1 477.62C209 314.42 627.667 278.62 811 281.12"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
                transition={{
                  duration: 10,
                }}
              />
            </motion.g>
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="0.325" stopColor="#6344F5"></stop>
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
              <motion.linearGradient
                id="gradient2"
                gradientUnits="userSpaceOnUse"
                x1={x1}
                x2={x2}
                y1="340"
                y2="340"
              >
                <stop stopColor="#6344F5" stopOpacity="0"></stop>
                <stop stopColor="#AE48FF"></stop>
                <stop offset="0.325" stopColor="#18CCFC"></stop>
                <stop offset="1" stopColor="#18CCFC" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </motion.svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
