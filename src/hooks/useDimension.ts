import { useState, useEffect } from "react";


export const useDimension = () => {
  const isClient = typeof window !== "undefined";
  const [dimension, setDimension] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) return;

    const listener = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isClient]);

  return dimension;
};