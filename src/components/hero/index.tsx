"use client";

import Device from "../device";
import { HeadingText } from "../heading-text";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col gap-6 justify-center"
    >
      <HeadingText />
      <Device />
    </section>
  );
}
