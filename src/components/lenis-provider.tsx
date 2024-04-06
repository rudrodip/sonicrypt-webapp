"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>;
}
