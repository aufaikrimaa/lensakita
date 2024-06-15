import React, { useRef, useState } from "react";

function VideoItem({ videoSrc, coverSrc }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };
  const handleClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setIsHovered(true);
      videoRef.current.play();
    } else {
      setIsPlaying(false);
      setIsHovered(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };

  return (
    <div className="w-[45%] sm:w-[23%] rounded-md overflow-hidden m-2">
      {!isHovered && (
        <img
          src={coverSrc}
          alt="Video Cover"
          className="w-full h-full object-cover cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
        />
      )}
      <video
        ref={videoRef}
        src={videoSrc}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`w-full h-full object-cover cursor-pointer ${
          isHovered ? "block" : "hidden"
        }`}
      />
    </div>
  );
}

export default VideoItem;
