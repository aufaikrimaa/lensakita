import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { pricelistData } from "../../data/pricelistData";
import Masonry from "react-masonry-css";
import HowToBook from "./HowToBook";
import qmark from "../../assets/question-mark.svg";
import "./pricelist.css";
import PriceListCard from "./PricelistCard";
import Footer from "../footer/Footer";

function PriceListComp({ isID }) {
  const [menu, setMenu] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleModalClose = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <div>
      {/* button how to book phone screen */}
      <div className="block sm:hidden">
        <div className="fixed mt-[92vh] ml-[85vw] z-30">
          <img
            src={qmark}
            className="w-[80%]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {/* modal how to book phone screen */}
      <div
        onClick={handleModalClose}
        className={`${
          isOpen ? "block z-40" : "hidden"
        } sm:hidden h-screen flex fixed`}
        style={{
          backgroundColor: "#001B0Ab4",
        }}
      >
        <div
          ref={modalRef}
          className="self-center bg-white mx-4 p-6 rounded-lg"
        >
          <HowToBook isID={isID} />
        </div>
      </div>

      {/* content */}
      <div className="relative bg-secondary px-[5vw] sm:px-[2.5vw]">
        <div className="h-[6rem] sm:h-[5rem] bg-white fixed w-full z-10"></div>
        <div className="sm:flex py-[5vw] sm:py-[vw]">
          <div className="pricelist-content bg-white w-[90vw] sm:w-[53vw] 2xl:w-[55vw] fixed mt-4 sm:mt-0 flex flex-col items-center sm:items-start z-20">
            <div className="w-full overflow-x-auto  gap-x-1 text-xs xl:text-[0.7rem] 2xl:text-xs mt-8 sm:mt-0 justify-center sm:pr-4">
              <div className="inline-flex space-x-1">
                <div
                  className={`grid justify-items-center w-[6rem] sm:w-[8rem] 2xl:w-[10rem] my-1 p-1 sm:p-2 hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                    menu === "all" ? "bg-buttonSecondary" : ""
                  }`}
                  onClick={() => setMenu("all")}
                >
                  <div className="">
                    <ion-icon name="albums-outline"></ion-icon>
                  </div>
                  {isID ? "Semua" : "All"}
                </div>
                <div
                  className={`grid justify-items-center w-[6rem] sm:w-[8rem] 2xl:w-[10rem]  my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                    menu === "school" ? "bg-buttonSecondary" : ""
                  }`}
                  onClick={() => setMenu("school")}
                >
                  <div className="">
                    <ion-icon name="school-outline"></ion-icon>
                  </div>
                  {isID ? "Acara Sekolah" : "School Events"}
                </div>
                <div
                  className={`grid justify-items-center w-[6rem] sm:w-[8rem] 2xl:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                    menu === "jeep" ? "bg-buttonSecondary" : ""
                  }`}
                  onClick={() => setMenu("jeep")}
                >
                  <div className="">
                    <ion-icon name="car-outline"></ion-icon>
                  </div>
                  {isID ? "Wisata Jeep & Liburan" : "Jeep Tour & Vacation"}
                </div>
                <div
                  className={`grid justify-items-center w-[6rem] sm:w-[8rem] 2xl:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                    menu === "wd" ? "bg-buttonSecondary" : ""
                  }`}
                  onClick={() => setMenu("wd")}
                >
                  <div className="">
                    <ion-icon name="heart-circle-outline"></ion-icon>
                  </div>
                  {isID ? "Pernikahan & Lamaran" : "Wedding & Engagement"}
                </div>
                <div
                  className={`grid justify-items-center w-[6rem] sm:w-[8rem] 2xl:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                    menu === "anev" ? "bg-buttonSecondary" : ""
                  }`}
                  onClick={() => setMenu("anev")}
                >
                  <div className="">
                    <ion-icon name="film-outline"></ion-icon>
                  </div>
                  {isID ? "Acara Lain" : "Another Events"}
                </div>
              </div>
            </div>
          </div>

          <div className="content w-full sm:w-[53vw] 2xl:w-[55vw] mt-[8rem] sm:mt-[5rem]">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="w-full my-masonry-grid flex"
              columnClassName="my-masonry-grid_column"
            >
              {pricelistData.wedding.data.map((item, i) => (
                <div
                  className={`px-2 ${
                    menu === "all" || menu === "wd" ? "block" : "hidden"
                  }`}
                  key={i}
                >
                  <PriceListCard
                    id={item.id}
                    photo={item.photo}
                    title={isID ? item.title.id : item.title.en}
                    pack={item.pack}
                    price={item.price}
                  />
                </div>
              ))}
            </Masonry>
          </div>
          <div className="mt-2 hidden sm:block">
            <div className="fixed h-[87%] sm:w-[42%] 2xl:w-[40%] rounded-xl p-8 bg-lightGray">
              <HowToBook isID={isID} />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Footer isID={isID} />
      </div>
    </div>
  );
}

export default PriceListComp;
