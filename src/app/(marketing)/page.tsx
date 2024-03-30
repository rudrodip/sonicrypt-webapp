"use client";

import { ClientOnly } from "@/components/client";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <Features />
    </ClientOnly>
  );
}
