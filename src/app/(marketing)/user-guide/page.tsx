"use client";

import { useRef, useState, useEffect } from "react";
import { GuideHeading } from "./_components/guide-heading";
import ConnectSection from "./_components/connect";
import ConfigureSection from "./_components/configure";
import TransactionSection from "./_components/transaction";
import EmulatorSection from "./_components/emulator";

export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const [sectionWidth, setSectionWidth] = useState(0);
  const [section1Height, setSection1Height] = useState(0);
  const [section2Height, setSection2Height] = useState(0);
  const [section3Height, setSection3Height] = useState(0);
  const [section4Height, setSection4Height] = useState(0);

  useEffect(() => {
    sectionRef?.current && setSectionWidth(sectionRef.current.clientWidth);
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

  return (
    <main ref={sectionRef} className="w-full mx-auto">
      <GuideHeading />
      <div
        ref={section1Ref}
        id="connect"
        className="w-full max-w-7xl mx-auto min-h-screen border"
      >
        <ConnectSection />
      </div>
      <div
        ref={section2Ref}
        id="configure"
        className="w-full max-w-7xl mx-auto min-h-screen border"
      >
        <ConfigureSection />
      </div>
      <div
        ref={section3Ref}
        id="transaction"
        className="w-full max-w-7xl mx-auto min-h-screen border"
      >
        <TransactionSection />
      </div>
      <div
        ref={section4Ref}
        id="emulator"
        className="w-full max-w-7xl mx-auto min-h-screen border"
      >
        <EmulatorSection />
      </div>
    </main>
  );
}
