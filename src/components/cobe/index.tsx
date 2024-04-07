"use client";

import { motion } from "framer-motion";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useDimension } from "@/hooks/useDimension";

export default function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useDimension();

  useEffect(() => {
    let phi = 0;
    let globeDimension = width > 768 ? 600 : 300;

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: globeDimension * 2,
        height: globeDimension * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.03 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-row items-center justify-center py-20 md:h-auto relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-full px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold font-heading tracking-tight">
            Notifying each transaction realtime
          </h2>
          <p className="text-center text-base md:text-lg font-normal max-w-md mt-2 mx-auto">
            Sonicrypt provides realtime notifications for each transaction on
            your account directly from the solana blockchain
          </p>
        </motion.div>
        <div className="flex justify-center items-center h-72 md:h-full z-10">
          <canvas
            ref={canvasRef}
            style={{
              width: width > 768 ? 600 : 300,
              height: width > 768 ? 600 : 300,
              maxWidth: "100%",
              aspectRatio: 1,
              backgroundColor: "transparent",
            }}
          />
        </div>
      </div>
    </div>
  );
}
