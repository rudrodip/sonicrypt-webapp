"use client";

import * as React from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
  fallbackImageUrl: string;
}

const initialOptions: videojs.PlayerOptions = {
  autoplay: true,
  controls: false,
  fluid: true,
  loop: true,
};

export const VideoJs = ({ options, fallbackImageUrl }: IVideoPlayerProps) => {
  const videoNode = React.useRef<HTMLVideoElement | null>(null);
  const player = React.useRef<videojs.Player>();

  // React.useEffect(() => {
  //   player.current = videojs(videoNode.current, {
  //     ...initialOptions,
  //     ...options,
  //   }).ready(function () {});
  //   return () => {
  //     if (player.current) {
  //       player.current.dispose();
  //     }
  //   };
  // }, [options]);

  return (
    <div className="w-full aspect-[1/2.23] flex justify-center items-center rounded-lg overflow-hidden">
      <video
        ref={videoNode}
        className="video-js w-full aspect-[1/2.23]"
        poster={fallbackImageUrl}
        preload="none"
      />
    </div>
  );
};
