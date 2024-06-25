import React, { useState } from "react";
import instagram from "../../assets/instagram-icon.svg";

function VideoItem({ cover, link }) {
  return (
    <div className="w-[47%] sm:w-[24%] m-1 cursor-pointer relative">
      <div className="relative">
        <img
          src={cover}
          alt={"video"}
          crossOrigin="anonymous"
          className="cover-videos w-full rounded-md"
          onClick={() => {
            window.open(link, "_blank");
          }}
        />
        <div
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              alt="Instagram Icon"
              className="instagram-icon rounded-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
