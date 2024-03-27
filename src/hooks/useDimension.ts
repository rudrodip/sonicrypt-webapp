import { useState, useEffect } from "react";

export const useDimension = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const listener = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return dimension;
};