"use client";

import Device from "../device";
import { HeadingText } from "../heading-text";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col gap-6 justify-center"
    >
      <HeadingText />
      <Device />
      <div className="block md:hidden w-full justify-center items-center">
        <Image
          src="/image/device.svg"
          alt="sonicrypt"
          width={400}
          height={800}
          className="w-1/2 mx-auto"
        />
      </div>
    </section>
  );
}
