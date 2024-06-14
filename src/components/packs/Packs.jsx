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
        trigger: ".service",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(".slide", {
      xPercent: -58,
      ease: Power2,
    });
  }, container);

  const packsDataS1 = [
    {
      title: "School Events",
      img: "https://lensakita-images.vercel.app/images/photo7.jpg",
    },
    {
      title: "Yearbook",
      img: "https://lensakita-images.vercel.app/images/photo5.jpg",
    },
    {
      title: "Graduation",
      img: "https://lensakita-images.vercel.app/images/gr-photo1.jpg",
    },
    {
      title: "Jeep Tour",
      img: "https://lensakita-images.vercel.app/images/jeep-photo2.jpg",
    },
    {
      title: "Vacation",
      img: "https://lensakita-images.vercel.app/images/jeep-photo7.jpg",
    },
    {
      title: "Wedding",
      img: "https://lensakita-images.vercel.app/images/wd-photo1.jpg",
    },
    {
      title: "Prewedding",
      img: "https://lensakita-images.vercel.app/images/wd-photo2.jpg",
    },
    {
      title: "Engagement",
      img: "https://lensakita-images.vercel.app/images/wd-photo3.jpg",
    },
    {
      title: "Cinematic",
      img: "https://lensakita-images.vercel.app/images/jeep-photo3.jpg",
    },
    {
      title: "Photoshoot",
      img: "https://lensakita-images.vercel.app/images/photo1.jpg",
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
          <div className="slide flex sm:flex items-center h-screen">
            <div className="text1 sm:w-[34rem] w-[12rem] text-[2.8rem] leading-[8vh] sm:text-[4rem] sm:leading-[18vh] text-gray">
              <h1 className="">{isID ? "Layanan Kami" : "Our Service"}</h1>
            </div>
            <div className="flex flex-wrap gap-x-16 sm:gap-x-28 gap-y-20 sm:w-[110rem] w-[50rem]">
              {packsDataS1.map((item, i) => (
                <div
                  key={i}
                  className="image  w-[16vh] h-[16vh] sm:w-[32vh] sm:h-[32vh]"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <h1 className="text-center text-xl mt-2">{item.title}</h1>
                </div>
              ))}
            </div>
            <div className="text1 w-[45rem] sm:w-[58rem] text-[7vh] leading-[8vh] sm:text-[4rem] sm:leading-[18vh] text-gray text-center">
              <h3 className="text-[1.6rem] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh] w-[22rem] sm:w-full">
                {isID
                  ? "Apapun acara dan kebutuhannya bisa hubungi kami untuk dokumentasi"
                  : "For any event and your needs, you can contact us for documentation."}
              </h3>
              <div className="packs-link text-[1rem] sm:text-[2rem] transition-colors duration-300 hover:text-white w-[22rem] sm:w-full">
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
  );
}

export default Packs;
