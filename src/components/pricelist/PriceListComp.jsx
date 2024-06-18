import { useState } from "react";

function PriceListComp({ isID }) {
  const [menu, setMenu] = useState("all");
  return (
    <div className="bg-secondary px-[5vw] sm:px-[2.5vw]">
      <div className="h-[6rem] sm:h-[5rem] bg-white fixed w-full z-10"></div>
      <div className="sm:flex py-[5vw] sm:py-[6vw]">
        <div className="sidebar w-[90vw] sm:w-[12rem] sm:border-r-2 border-gray fixed sm:h-[80%] mt-4 sm:mt-0 flex flex-col items-center sm:items-start z-20">
          <div className="w-full overflow-x-auto sm:flex-col gap-x-1 text-sm sm:text-base mt-8 sm:mt-0 justify-center sm:pr-4">
            <div className="inline-flex sm:flex-col sm:space-x-0 space-x-2">
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2 hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "all" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("all")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="albums-outline"></ion-icon>
                </div>
                {isID ? "Semua" : "All"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "school"
                    ? "bg-buttonSecondary"
                    : "border sm:border-0"
                }`}
                onClick={() => setMenu("school")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="bookmarks-outline"></ion-icon>
                </div>
                {isID ? "Acara Sekolah" : "School Events"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "gradu" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("gradu")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="school-outline"></ion-icon>
                </div>
                {isID ? "Kelulusan" : "Graduation"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "jeep" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("jeep")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="car-outline"></ion-icon>
                </div>
                {isID ? "Wisata Jeep" : "Jeep Tour"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "wd" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("wd")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="rose-outline"></ion-icon>
                </div>
                {isID ? "Pernikahan" : "Wedding"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "prewd" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("prewd")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="heart-circle-outline"></ion-icon>
                </div>
                Pre Wedding
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "eng" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("eng")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="diamond-outline"></ion-icon>
                </div>
                {isID ? "Lamaran" : "Engagement"}
              </div>
              <div
                className={`flex justify-center sm:justify-start w-[7rem] sm:w-full my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out ${
                  menu === "anev" ? "bg-buttonSecondary" : "border sm:border-0"
                }`}
                onClick={() => setMenu("anev")}
              >
                <div className="hidden sm:block">
                  <ion-icon name="film-outline"></ion-icon>
                </div>
                {isID ? "Acara Lain" : "Another Events"}
              </div>
            </div>
          </div>
        </div>
        <div className="content w-full sm:ml-[14%] mt-20 sm:mt-0">
          {/* <div className={`${menu === "photos" ? "block" : "hidden"}`}>
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
              <VideoItem key={i} videoSrc={item.video} coverSrc={item.cover} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PriceListComp;
