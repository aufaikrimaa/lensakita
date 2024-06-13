import { useRef } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "./packs.css";

gsap.registerPlugin(ScrollTrigger);

function Packs({ isID }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(".slide", {
      xPercent: -410,
      ease: Power2,
    });
  }, container);

  return (
    <div
      ref={container}
      className="real section sm:w-full  px-8 sm:px-8 mt-32 bg-primary"
    >
      <div className="cont h-[500vh] relative text-white">
        <div className="slides w-full h-[130vh] overflow-hidden sticky top-0 left-0 flex">
          {/* 1st slide */}
          <div className="slide w-full flex sm:flex items-center justify-center h-screen flex-shrink-0 ">
            <div className="text1 text-[7vh] leading-[8vh] sm:text-[6rem] sm:leading-[18vh] text-gray">
              <h1 className="">{isID ? "Layanan Kami" : "Our Service"}</h1>
            </div>
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5 top-1/2 sm:-translate-y-1/2 translate-x-1/2 right-0 ">
              <img
                src="https://lensakita-images.vercel.app/images/photo1.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          {/* 2nd slide */}
          <div className="slide w-full h-screen sm:flex flex items-center justify-center flex-shrink-0 relative ">
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 -translate-y-1/2 right-1/2">
              <img
                src="https://lensakita-images.vercel.app/images/photo2.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[28vh] sm:h-[28vh] top-8 right-64">
              <img
                src="https://lensakita-images.vercel.app/images/photo5.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-[50%] text-center  relative">
              <h3 className=" text-[2vh] sm:text-[5vh] font-semibold sm:leading-[7vh]">
                {isID
                  ? "Pemotretan Buku Tahunan dan Acara Sekolah lainnya"
                  : "Yearbook Photoshoot and Other School Events"}
              </h3>
            </div>
            <div className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh]  bottom-[10vh] sm:top-2/3 sm:left-1/4 -translate-x-1/2">
              <img
                src="https://lensakita-images.vercel.app/images/photo10.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2  translate-y-[20vh]">
              <img
                src="https://lensakita-images.vercel.app/images/photo11.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2  sm:-translate-y-1/2 sm:translate-x-1/2 sm:right-0 ">
              <img
                src="https://lensakita-images.vercel.app/images/photo7.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* 3rd slide */}

          <div className="slide w-full h-screen flex sm:flex items-center justify-center flex-shrink-0  relative">
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[30vh] sm:h-[30vh] sm:top-20 bottom-[20vh] right-[20vh] sm:left-80">
              <img
                src="https://lensakita-images.vercel.app/images/gr-photo5.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] sm:top-20 sm:-translate-x-1/5 bottom-[20vh] right-[20vh] sm:-translate-y-1/2 sm:right-1/3">
              <img
                src="https://lensakita-images.vercel.app/images/gr-photo1.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-[40%] text-end relative">
              <h3 className="text-[3.5vh] whitespace-nowrap sm:text-[6vh] font-semibold sm:leading-[6vh]">
                Graduation
              </h3>
            </div>
            <div
              className="image absolute w-[30vh] sm:w-[45vh] sm:h-[45vh] bottom-10 right-2/4 
                    translate-y-1/3 -translate-x-1/5"
            >
              <img
                src="https://lensakita-images.vercel.app/images/gr-photo2.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className="hidden sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/4 -translate-y-1/4 translate-x-1/3
                    right-0 "
            >
              <img
                src="https://lensakita-images.vercel.app/images/gr-photo3.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className="hidden sm:inline-block image absolute w-[20vh] sm:w-[20vh] sm:h-[20vh] bottom-6 -translate-y-1/4 translate-x-1/3
                    right-60 "
            >
              <img
                src="https://lensakita-images.vercel.app/images/gr-photo4.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* 4th slide */}
          <div className="slide w-full h-screen sm:flex flex items-center justify-center flex-shrink-0 relative ">
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 -translate-y-1/2 right-1/2">
              <img
                src="https://lensakita-images.vercel.app/images/wd-photo2.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] h-[20vh] sm:w-[28vh] sm:h-[28vh] top-8 right-64">
              <img
                src="https://lensakita-images.vercel.app/images/wd-photo1.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-[50%] text-center  relative">
              <h3 className=" text-[2vh] sm:text-[5vh] font-semibold sm:leading-[7vh]">
                {isID
                  ? "Pernikahan, Lamaran, dan Pra Wedding"
                  : "Wedding, Engagement, and Pre Wedding"}
              </h3>
            </div>
            <div className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh]  bottom-[10vh] sm:top-2/3 sm:left-1/4 -translate-x-1/2">
              <img
                src="https://lensakita-images.vercel.app/images/wd-photo3.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2  translate-y-[20vh]">
              <img
                src="https://lensakita-images.vercel.app/images/wd-photo1.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2  sm:-translate-y-1/2 sm:translate-x-1/2 sm:right-0 ">
              <img
                src="https://lensakita-images.vercel.app/images/jeep-photo7.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* 5th slide */}
          <div
            className="slide w-full h-screen flex  sm:flex items-center justify-center 
                relative flex-shrink-0 "
          >
            <div
              className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
            >
              <img
                src="https://lensakita-images.vercel.app/images/jeep-photo6.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-[70%] text-center  relative">
              <h3 className="text-[3.1vh] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh]">
                {isID
                  ? "Wisata Jeep dan Wisata lainnya, apapun acaranya bisa hubungi kami untuk dokumentasi"
                  : "Jeep Tours and Other Tours, for any event you can contact us for documentation"}
              </h3>
              <div className="packs-link text-[1rem] sm:text-[2rem] hover:text-buttonPrimary">
                <Link to="/">
                  {isID ? "Lihat selengkapnya " : "View more "}
                  <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                </Link>
              </div>
            </div>

            <div
              className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
            >
              <img
                src="https://lensakita-images.vercel.app/images/jeep-photo1.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5
                    sm:translate-x-2/3  sm:right-0 "
            >
              <img
                src="https://lensakita-images.vercel.app/images/jeep-photo2.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className="image absolute w-[30vh] h-[30vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-40 "
            >
              <img
                src="https://lensakita-images.vercel.app/images/jeep-photo3.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packs;
