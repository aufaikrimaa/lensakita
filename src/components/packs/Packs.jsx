import { useRef } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import ReactPlayer from "react-player";
import "./packs.css";

gsap.registerPlugin(ScrollTrigger);

function Packs({ isID }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(".slide", {
      xPercent: -50,
      ease: Power2,
    });
  }, container);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
  };

  const schoolEvent = [
    {
      img: "https://lensakita-images.vercel.app/images/photo1.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/photo3.jpg",
      video: "",
    },
    {
      img: "",
      video: "https://lensakita-images.vercel.app/videos/school-video1.mp4",
    },
    {
      img: "https://lensakita-images.vercel.app/images/photo2.jpg",
      video: "",
    },
    {
      img: "",
      video: "https://lensakita-images.vercel.app/videos/school-video2.mp4",
    },
    {
      img: "https://lensakita-images.vercel.app/images/photo4.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/photo5.jpg",
      video: "",
    },
  ];

  const tour = [
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo1.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo2.jpg",
      video: "",
    },
    {
      img: "",
      video: "https://lensakita-images.vercel.app/videos/tour-video1.mp4",
    },
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo3.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo4.jpg",
      video: "",
    },
    {
      img: "",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo6.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/jeep-photo5.jpg",
      video: "",
    },
  ];

  const graduation = [
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo1.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo2.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo3.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo4.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo5.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/gr-photo1.jpg",
      video: "",
    },
  ];

  const wd = [
    {
      img: "",
      video: "https://lensakita-images.vercel.app/videos/wd-video1.mp4",
    },
    {
      img: "https://lensakita-images.vercel.app/images/wd-photo6.jpg",
      video: "",
    },
    {
      img: "",
      video: "https://lensakita-images.vercel.app/videos/wd-video2.mp4",
    },
    {
      img: "https://lensakita-images.vercel.app/images/wd-photo1.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/wd-photo7.jpg",
      video: "",
    },
    {
      img: "https://lensakita-images.vercel.app/images/wd-photo2.jpg",
      video: "",
    },
  ];
  return (
    <div
      ref={container}
      className="service section sm:w-full  px-8 sm:px-8 mt-32 bg-primary"
    >
      <div className="cont h-[300vh] sm:h-[500vh] relative text-white">
        <div className="slides w-full h-[110vh] overflow-hidden sticky top-0 left-0 flex">
          {/* 1st slide */}
          <div className="slide mt-8 h-screen">
            <div className="text1 sm:w-[34rem] w-[12rem] text-[2.8rem] leading-[8vh] sm:text-[4rem] sm:leading-[18vh] text-gray mb-6">
              <h1 className="">{isID ? "Layanan Kami" : "Our Service"}</h1>
            </div>
            <div className="flex sm:flex items-center">
              <div className="flex flex-wrap gap-x-2  sm:w-[140rem] w-[50rem]">
                <div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {schoolEvent.map((item, i) => (
                      <div key={i} className="w-[60%] sm:w-40 m-1 sm:m-2">
                        <img src={item.img} className="rounded-md" />
                        <ReactPlayer
                          playing={true}
                          loop={true}
                          muted={true}
                          url={item.video}
                          height={"100%"}
                          width={"100%"}
                          className="react-player"
                        />
                      </div>
                    ))}
                  </Masonry>
                  <div className="text-center text-3xl font-semibold mb-4">
                    School Events
                  </div>
                </div>
                <div>
                  <div className="text-center text-3xl font-semibold mb-4">
                    Jeep Tour & Vacation
                  </div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tour.map((item, i) => (
                      <div key={i} className="w-[60%] sm:w-40 m-1 sm:m-2">
                        <img src={item.img} className="rounded-md" />
                        <ReactPlayer
                          playing={true}
                          loop={true}
                          muted={true}
                          url={item.video}
                          height={"100%"}
                          width={"100%"}
                          className="react-player"
                        />
                      </div>
                    ))}
                  </Masonry>
                </div>
                <div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {graduation.map((item, i) => (
                      <div key={i} className="w-[60%] sm:w-40 m-1 sm:m-2">
                        <img src={item.img} className="rounded-md" />
                        <ReactPlayer
                          playing={true}
                          loop={true}
                          muted={true}
                          url={item.video}
                          height={"100%"}
                          width={"100%"}
                          className="react-player"
                        />
                      </div>
                    ))}
                  </Masonry>
                  <div className="text-center text-3xl font-semibold mb-4">
                    Graduation
                  </div>
                </div>
                <div>
                  <div className="text-center text-3xl font-semibold mb-4">
                    Wedding, Pre Wedding & Engagement
                  </div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {wd.map((item, i) => (
                      <div key={i} className="w-[60%] sm:w-40 m-1 sm:m-2">
                        <img src={item.img} className="rounded-md" />
                        <ReactPlayer
                          playing={true}
                          loop={true}
                          muted={true}
                          url={item.video}
                          height={"100%"}
                          width={"100%"}
                          className="react-player"
                        />
                      </div>
                    ))}
                  </Masonry>
                </div>
              </div>
              <div className="text1 w-[45rem] sm:w-[40rem] leading-[8vh] text-gray text-center">
                <h3 className="text-[1.6rem] leading-[3.4vh] sm:text-[2rem] font-semibold sm:leading-[6vh] w-[22rem] sm:w-full">
                  {isID
                    ? "Apapun acara dan kebutuhannya bisa hubungi kami untuk dokumentasi"
                    : "For any event and your needs, you can contact us for documentation."}
                </h3>
                <div className="packs-link text-[1rem] sm:text-[1.5rem] transition-colors duration-300 hover:text-white w-[22rem] sm:w-full">
                  <Link to="/">
                    {isID ? "Lihat selengkapnya " : "View more "}
                    <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packs;
