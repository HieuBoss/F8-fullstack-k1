import React, { useEffect, useRef } from "react";
import Video from "./Video";
export default function VideoPlayer() {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  }, []);
  return (
    <div>
      <Video ref={videoRef} />
      <hr />
      <button
        onClick={() => {
          videoRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
}
