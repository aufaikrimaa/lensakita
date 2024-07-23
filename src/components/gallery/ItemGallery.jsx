import Masonry from "react-masonry-css";
import "./gallery.css";
import { useState } from "react";
import dataPhoto from "../../data/photoData";
import dataVideo from "../../data/videoData";
import VideoItem from "./VideoItem";
import Footer from "../footer/Footer";

function ItemGallery({ isID }) {
  const [menu, setMenu] = useState("photos");

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <>
      <div className="bg-secondary px-[5vw] sm:px-[2.5vw] relative">
        <div className="h-[6rem] sm:h-[5rem] bg-white fixed w-full z-10"></div>
        <div className="sm:flex py-[5vw] sm:py-[6vw]">
          <div className="sidebar w-[90vw] sm:w-[10rem] 2xl:w-[12rem] 3xl:w-[16rem] sm:border-r-2 border-buttonSecondary fixed sm:h-[80%] mt-4 sm:mt-0 flex flex-col items-center sm:items-start z-20">
            <div className="w-full flex sm:flex-col gap-x-4 text-sm sm:text-base mt-3 sm:mt-0 justify-center sm:pr-4">
              <div
                className={`sm:w-full my-1 p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "photos" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("photos")}
              >
                <ion-icon name="images-outline"></ion-icon>
                {isID ? "Galeri Foto" : "Gallery Photo"}
              </div>
              <div
                className={`sm:w-full my-1 p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "videos" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("videos")}
              >
                <ion-icon name="videocam-outline"></ion-icon>
                {isID ? "Galeri " : "Gallery "} Video
              </div>
            </div>
          </div>
          <div className="content w-full sm:ml-[14%] mt-20 sm:mt-0">
            <div className={`${menu === "photos" ? "block" : "hidden"}`}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid flex"
                columnClassName="my-masonry-grid_column"
              >
                {dataPhoto.map((img, i) => (
                  <div key={i} className="w-[96%] sm:w-70 m-1 sm:m-2">
                    <img src={img} className="rounded-md" />
                  </div>
                ))}
              </Masonry>
            </div>

            <div
              className={`${
                menu === "videos" ? "block" : "hidden"
              } flex flex-wrap`}
            >
              {dataVideo.map((item, i) => (
                <VideoItem key={i} link={item.video} cover={item.cover} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Footer isID={isID} />
      </div>
    </>
  );
}

export default ItemGallery;
