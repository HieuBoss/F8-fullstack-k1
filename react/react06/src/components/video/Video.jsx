import React, { forwardRef, useImperativeHandle, useRef } from "react";
import video from "./video.mp4";
const Video = (props, ref) => {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} src={video} />;
};
export default forwardRef(Video);
