"use client";

import YouTube, { YouTubeProps } from 'react-youtube';
import { useRef, useState, useEffect } from 'react';

export default function VideoPreview() {
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const opts: YouTubeProps['opts'] = {
    height: (Math.floor(width * 0.95 * 0.5625)).toString(),
    width: (Math.floor(width * 0.95)).toString(),
  };


  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div
    ref={containerRef}
      className="relative w-full aspect-video max-w-5xl mx-auto p-5 border border-dashed flex justify-center items-center"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <YouTube videoId="yUm7kYV3p28" opts={opts} />
    </div>
  );
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
