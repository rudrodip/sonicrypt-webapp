"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect, use } from "react";
import { GuideHeading } from "./_components/guide-heading";
import ConnectSection from "./_components/connect";
import ConfigureSection from "./_components/configure";
import TransactionSection from "./_components/transaction";
import EmulatorSection from "./_components/emulator";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const [sectionWidth, setSectionWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [section1Height, setSection1Height] = useState(0);
  const [section2Height, setSection2Height] = useState(0);
  const [section3Height, setSection3Height] = useState(0);
  const [section4Height, setSection4Height] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    sectionRef?.current && setSectionWidth(sectionRef.current.clientWidth);
    sectionRef?.current && setSectionHeight(sectionRef.current.clientHeight);
    section1Ref?.current && setSection1Height(section1Ref.current.clientHeight);
    section2Ref?.current && setSection2Height(section2Ref.current.clientHeight);
    section3Ref?.current && setSection3Height(section3Ref.current.clientHeight);
    section4Ref?.current && setSection4Height(section4Ref.current.clientHeight);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < section1Height) {
        window.location.hash = "#connect";
      } else if (scrollY < section1Height + section2Height) {
        window.location.hash = "#configure";
      } else if (scrollY < section1Height + section2Height + section3Height) {
        window.location.hash = "#transaction";
      } else {
        window.location.hash = "#emulator";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section1Height, section2Height, section3Height]);

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [200, sectionHeight]),
  );

  const x2 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [100, sectionWidth]),
  );

  // max 50, shrinks to min 5 depending on the sectionWidht
  const minX = 50; // todo

  return (
    <motion.main className="w-full mx-auto">
      <GuideHeading />
      <motion.div
        ref={sectionRef}
        className="relative flex flex-col gap-5 lg:gap-24 mt-12 lg:mt-24"
      >
        <div
          ref={section1Ref}
          id="connect"
          className="w-full max-w-7xl mx-auto"
        >
          <ConnectSection />
        </div>
        <div
          ref={section2Ref}
          id="configure"
          className="w-full max-w-7xl mx-auto"
        >
          <ConfigureSection />
        </div>
        <div
          ref={section3Ref}
          id="transaction"
          className="w-full max-w-7xl mx-auto"
        >
          <TransactionSection />
        </div>
        <div
          ref={section4Ref}
          id="emulator"
          className="w-full max-w-7xl mx-auto"
        >
          <EmulatorSection />
        </div>
        <motion.svg
          width={sectionWidth}
          height={sectionHeight}
          viewBox={`0 0 ${sectionWidth} ${sectionHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block absolute top-0 left-0"
        >
          <path
            d={
              `
              M ${minX} ${minX}
              V ${section1Height + 50}
              C 50 ${section1Height + 50 + 11.046} ${50 + 11.046} ${
                section1Height + 50 + 20
              } ${50 + 20} ${section1Height + 50 + 20}
              H ${sectionWidth - 50}
              V ${section1Height + section2Height + 100}
              H 50
              V ${section1Height + section2Height + section3Height + 150}
              C 50 ${section1Height + section2Height + section3Height + 150 + 11.046} ${
                50 + 11.046
              } ${section1Height + section2Height + section3Height + 150 + 20} ${
                50 + 20
              } ${section1Height + section2Height + section3Height + 150 + 20}
              H ${sectionWidth - 50}
              V ${sectionHeight}
              `
            }
            stroke="url(#paint0_linear_140_3)"
            stroke-width="6"
          />
          <defs>
            <motion.linearGradient
              id="paint0_linear_140_3"
              x1="2.99999"
              y1="1"
              x2={x2}
              y2={y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.main>
  );
}
