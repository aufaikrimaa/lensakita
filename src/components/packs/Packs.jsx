import { useRef, memo } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { schoolEvent, tour, graduation, wd } from "../../data/serviceData";
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
    700: 3,
  };

  return (
    <div
      ref={container}
      className="service section sm:w-full px-[5vw] sm:px-8 mt-32 bg-primary"
    >
      <div className="cont h-[300vh] sm:h-[500vh] relative text-white">
        <div className="slides w-full h-[110vh] overflow-hidden sticky top-0 left-0 flex">
          {/* 1st slide */}
          <div className="slide sm:mt-8 mt-14 h-screen">
            <div className="text1 sm:w-[34rem] w-full text-[2.8rem] leading-[8vh] sm:text-[4rem] sm:leading-[18vh] text-gray mb-6">
              <h1 className="">{isID ? "Layanan Kami" : "Our Service"}</h1>
            </div>
            <div className="flex sm:flex items-center">
              <div className="flex flex-wrap sm:gap-x-2  sm:w-[138rem] w-[46rem]">
                <div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {schoolEvent.map((item, i) => (
                      <div key={i} className="w-[7rem] sm:w-40 m-1 sm:m-2">
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
                  <div className="text-center sm:text-3xl font-semibold mb-4">
                    School Events
                  </div>
                </div>
                <div>
                  <div className="text-center sm:text-3xl font-semibold mb-4">
                    Jeep Tour & Vacation
                  </div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tour.map((item, i) => (
                      <div key={i} className="w-[7rem] sm:w-40 m-1 sm:m-2">
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
                      <div key={i} className="w-[7rem] sm:w-40 m-1 sm:m-2">
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
                  <div className="text-center sm:text-3xl font-semibold mb-4">
                    Graduation
                  </div>
                </div>
                <div>
                  <div className="text-center sm:text-3xl font-semibold mb-4">
                    Wedding, Pre Wedding & Engagement
                  </div>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                  >
                    {wd.map((item, i) => (
                      <div key={i} className="w-[7rem] sm:w-40 m-1 sm:m-2">
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
                  <Link to="/pricelist">
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

export default memo(Packs);
