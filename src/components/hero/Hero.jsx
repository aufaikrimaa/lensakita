import "./hero.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part1",
        start: "50% 50%",
        end: "250% 50%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(".rotateDiv", { rotate: -15, scale: 0.8 }, "a");
    tl.to(".rowDiv2", { marginTop: "1%" }, "a");
    tl.to(".rowDiv3", { marginTop: "0%" }, "a");
    tl.to(".rowDiv4", { marginTop: "-2%" }, "a");
    tl.to(".rowDiv5", { marginTop: "-10%" }, "a");
    tl.to(".overlayDiv img", { opacity: 1, delay: 0.2 }, "a");
    tl.to(".overlayDiv", { backgroundColor: "#001B0Ab4" }, "a");
    tl.to(".scrolling", { width: "100%" }, "a");
  });

  const data = [
    {
      class: "rowDiv1 flex flex-col  gap-[6vw] md:gap-[2vw]",
      img1: "https://lensakita-images.vercel.app/images/photo1.jpg",
      img2: "https://lensakita-images.vercel.app/images/photo2.jpg",
      img3: "https://lensakita-images.vercel.app/images/photo3.jpg",
      img4: "https://lensakita-images.vercel.app/images/photo4.jpg",
    },
    {
      class:
        "rowDiv2 mt-[-4%] sm:mt-[8%] flex flex-col  gap-[6vw] md:gap-[2vw]",
      img1: "https://lensakita-images.vercel.app/images/photo5.jpg",
      img2: "https://lensakita-images.vercel.app/images/photo6.jpg",
      img3: "https://lensakita-images.vercel.app/images/photo7.jpg",
      img4: "https://lensakita-images.vercel.app/images/photo8.jpg",
    },
    {
      class:
        "rowDiv3 mt-[-8%] sm:mt-[10%] flex flex-col  gap-[6vw] md:gap-[2vw]",
      img1: "https://lensakita-images.vercel.app/images/photo9.jpg",
      img2: "https://lensakita-images.vercel.app/images/photo10.jpg",
      img3: "https://lensakita-images.vercel.app/images/photo11.jpg",
      img4: "https://lensakita-images.vercel.app/images/photo12.jpg",
    },
    {
      class:
        "rowDiv4 mt-[-10%] sm:mt-[8%] flex flex-col  gap-[6vw] md:gap-[2vw]",
      img1: "https://lensakita-images.vercel.app/images/photo1.jpg",
      img2: "https://lensakita-images.vercel.app/images/photo2.jpg",
      img3: "https://lensakita-images.vercel.app/images/photo3.jpg",
      img4: "https://lensakita-images.vercel.app/images/photo4.jpg",
    },
    {
      class:
        "rowDiv5 mt-[-14%] sm:mt-[6%] flex flex-col gap-[6vw] md:gap-[2vw]",
      img1: "https://lensakita-images.vercel.app/images/photo5.jpg",
      img2: "https://lensakita-images.vercel.app/images/photo6.jpg",
      img3: "https://lensakita-images.vercel.app/images/photo7.jpg",
      img4: "https://lensakita-images.vercel.app/images/photo8.jpg",
    },
  ];

  return (
    <div
      className="part1 w-[100%] h-[100vh] md:w-[100%] 
      md:h-[100vh] bg-primary overflow-hidden"
    >
      <div
        className="contentPart1 w-[100%] h-[100vh] 
        md:w-[100%] 
        md:h-[100vh] 
        flex items-center relative
        justify-center"
      >
        <div
          className="rotateDiv w-[200vw] h-[200vh] md:w-[200vw] 
          md:h-[200vh] bg-primary  scale-100
          flex items-start
          justify-center gap-[6vw] md:gap-[2vw]"
        >
          {data.map((item, i) => (
            <div key={i} className={`rowDiv ${item.class}`}>
              <div className="imgDiv ">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={item.img1}
                  alt=""
                />
              </div>
              <div className="imgDiv ">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={item.img2}
                  alt=""
                />
              </div>
              <div className="imgDiv ">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={item.img3}
                  alt=""
                />
              </div>
              <div className="imgDiv ">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={item.img4}
                  alt=""
                />
              </div>
            </div>
          ))}

          {/* // 1st row */}
          {/* <div className="rowDiv rowDiv1 flex flex-col  gap-[6vw] md:gap-[2vw] ">
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo1.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo2.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo3.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo4.jpg"
                alt=""
              />
            </div>
          </div> */}
          {/* // 2nd row */}
          {/* <div className="rowDiv  rowDiv2 mt-[-4%] sm:mt-[8%] flex flex-col  gap-[6vw] md:gap-[2vw] ">
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo5.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo6.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo7.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo8.jpg"
                alt=""
              />
            </div>
          </div> */}
          {/* // 3rd row */}
          {/* <div className="rowDiv  rowDiv3 mt-[-8%] sm:mt-[10%] flex flex-col  gap-[6vw] md:gap-[2vw] ">
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo9.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo10.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo11.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo12.jpg"
                alt=""
              />
            </div>
          </div> */}
          {/* // 4th row */}
          {/* <div className="rowDiv  rowDiv4 mt-[-10%] sm:mt-[8%] flex flex-col  gap-[6vw] md:gap-[2vw] ">
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo1.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo2.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo3.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo4.jpg"
                alt=""
              />
            </div>
          </div> */}
          {/* // 5th row */}
          {/* <div className="rowDiv rowDiv5 mt-[-14%] sm:mt-[6%] flex flex-col gap-[6vw] md:gap-[2vw]">
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo5.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo6.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo7.jpg"
                alt=""
              />
            </div>
            <div className="imgDiv ">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://lensakita-images.vercel.app/images/photo8.jpg"
                alt=""
              />
            </div>
          </div> */}
          {/*  */}
        </div>

        <div
          className="overlayDiv absolute flex items-center 
        text-secondary overflow-hidden bg-transparent 
          justify-center w-[100%] h-[100vh]"
        >
          <img
            src="https://lensakita-images.vercel.app/images/logo-lk-white.png"
            className="opacity-0 tracking-tighter h-[12vw] sm:h-[11vw]"
          />
          <div
            className="scrollDown absolute 
            bottom-12 sm:bottom-10 
            sm:left-1/2 flex flex-col items-center gap-1"
          >
            <h3
              className="text-[2.3vw] sm:text-[.6vw] 
              uppercase text-center"
            >
              scroll down
            </h3>
            <div
              className="scrollingP w-[16vw] sm:w-[5vw] bg-third h-[.3vw] 
            sm:h-[.1vw] relative rounded-md"
            >
              <div
                className="scrolling absolute top-0 w-[0vw] 
              sm:w-[0vw] bg-secondary  h-[.3vw] sm:h-[.1vw] 
              rounded-md"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
