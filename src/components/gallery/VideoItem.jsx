import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoItem({ videoSrc, coverSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  const handleClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-[47%] sm:w-[24%] m-1 cursor-pointer relative">
      <div>
        {!isPlaying && (
          <div onClick={handleClick} onMouseEnter={handleMouseEnter}>
            <img
              src={coverSrc}
              alt="Video Cover"
              className="w-full object-cover cursor-pointer rounded-md"
            />
          </div>
        )}
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${isPlaying ? "block" : "hidden"}`}
        >
          <ReactPlayer
            playing={isPlaying}
            url={videoSrc}
            height={"100%"}
            width={"100%"}
            className="react-player"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
