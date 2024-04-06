"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";

export default function Products() {
  return (
    <>
      <h1 className="head-text-md text-center mt-32">Product line</h1>
      <div className="py-10 md:py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Sonicrypt plus"
          features={["Voice confirmation", "Multi-wallet support", "LCD display"]}
          icon={<SonicryptLogo />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-black"
            dotSize={2}
          />
        </Card>
        <Card
          title="Sonicrypt"
          features={[
            "Auditory confirmation",
            "Visual confirmation",
            "BLE Server",
          ]}
          icon={<SonicryptLogo />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 255, 255]]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Sonicrypt pro"
          features={[
            "Multi-wallet & multi chain support",
            "On the fly QR Generate",
            "NFT integration",
            "Touch screen",
          ]}
          icon={<SonicryptLogo />}
        >
          <CanvasRevealEffect
            animationSpeed={6}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  features,
  icon,
  children,
}: {
  title: string;
  features: string[];
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col p-4">
        <h2 className="dark:text-white text-4xl font-heading font-semibold tracking-tight opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        {features.map((feature, index) => (
          <h2
            key={index}
            className="dark:text-white text-2xl font-heading opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 ml-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {"> "}
            {feature}
          </h2>
        ))}
      </div>
    </div>
  );
};

const SonicryptLogo = () => {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_136_11)">
        <path
          d="M0.0400391 0.0400391H51.048C61.9823 0.0400391 67.4494 0.0400391 71.6107 2.2017C75.1175 4.02331 77.9768 6.88258 79.7984 10.3893C81.96 14.5507 81.96 20.0178 81.96 30.952V81.96H0.0400391V0.0400391Z"
          fill="#F3F3F3"
        />
        <g filter="url(#filter0_d_136_11)">
          <circle
            cx="41.0001"
            cy="41"
            r="15.1704"
            fill="url(#paint0_linear_136_11)"
          />
          <circle cx="41.1519" cy="41.1518" r="2.27556" fill="#3C3C3C" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_136_11"
          x="24.4697"
          y="25.1896"
          width="33.0607"
          height="33.0608"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.72" />
          <feGaussianBlur stdDeviation="0.68" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_136_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_136_11"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_136_11"
          x1="41.0001"
          y1="25.8296"
          x2="41.0001"
          y2="56.1703"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9D9D9D" />
          <stop offset="1" stop-color="#4C4C4C" />
        </linearGradient>
        <clipPath id="clip0_136_11">
          <rect
            width="81.92"
            height="81.92"
            fill="white"
            transform="translate(0.0400391 0.0400391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
