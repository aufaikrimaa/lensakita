import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./whyus.css";

gsap.registerPlugin(ScrollTrigger);

function WhyUs({ isID }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part3",
        start: "50% 50%",
        end: "200% 50%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(".content1", { marginTop: "-50%", opacity: 1 }, "sct1");
    tl.to(".circle", { rotate: "180deg" }, "sct1");
    tl.to(".content2", { opacity: 1 }, "sct2");
    tl.to(".content1", { marginTop: "-100%", opacity: 0 }, "sct2");
    tl.to(".circle", { rotate: "360deg" }, "sct2");
    tl.to(".content3", { opacity: 1 }, "sct3");
    tl.to(".content2", { opacity: 0 }, "sct3");
    tl.to(".content1", { marginTop: "-145%" }, "sct3");
    tl.to(".circle", { rotate: "540deg" }, "sct3");
    tl.to(".content4", { opacity: 1 }, "sct4");
    tl.to(".content3", { opacity: 0 }, "sct4");
    tl.to(".content1", { marginTop: "-190%" }, "sct4");
    tl.to(".circle", { rotate: "720deg" }, "sct4");
    tl.to(".content4", { opacity: 0 }, "sct5");
    tl.to(".content1", { marginTop: "-230%" }, "sct5");
    tl.to(".circle", { rotate: "900deg" }, "sct5");
  });

  const dataWhyUs = [
    {
      class: "content1",
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      class: "content2",
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      class: "content3",
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      class: "content4",
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="part3 w-full h-[100vh] bg-secondary px-[5vw] sm:px-[2.5vw] relative flex flex-col pt-[4vw] sm:mt-0 sm:flex sm:flex-row sm:justify-between overflow-hidden sm:overflow-hidden">
      <div className="leftDiv sm:w-1/2 sm:h-[100%] py-[24vw] sm:py-0 flex flex-col gap-[6vw] sm:gap-0 sm:justify-center">
        <div className="flex gap-[2vw] sm:gap-0 sm:flex-col">
          <div className="text-[9vw] sm:text-[5rem] tracking-tighter leading-[3rem] sm:leading-[6rem]">
            <h2 className="text-gray">
              {isID
                ? "Kenapa harus pilih LensaKita?"
                : "Why you should choose LensaKita?"}
            </h2>
          </div>
        </div>
        <div className="outerCircle mt-[2vw] w-[14vw] h-[14vw] sm:w-[6.5vw]  sm:h-[6.5vw] bg-buttonPrimary rounded-full flex items-center justify-center">
          <div className="circle text-white w-[2rem] sm:w-[4rem]">
            <ion-icon name="medical-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-3/5 sm:h-[200%]  rghtDiv flex flex-col gap-[18vw] sm:gap-[7vw] mt-[24vw] sm:mt-[50%]">
        {dataWhyUs.map((item, i) => (
          <div
            key={i}
            className={`${item.class} flex flex-col gap-[4vw] sm:gap-[2vw] opacity-0 `}
          >
            <h4 className="text-[7vw] sm:text-[2vw] tracking-tighter text-textTitle">
              {item.title}
            </h4>
            <p className="text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
