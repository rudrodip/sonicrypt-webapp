"use client";

import { ClientOnly } from "@/components/client";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
    </ClientOnly>
  );
}
