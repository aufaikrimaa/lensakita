import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

function About({ isID }) {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px", () => {
      gsap.to(".textAreaHover h2", {
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".content2",
          start: "50% 80%",
          end: "50% 50%",
          scrub: 1,
        },
      });
      gsap.to(".textAreaHover2 h2", {
        width: "100%",
        delay: 2,
        duration: 2,
        scrollTrigger: {
          trigger: ".content2",
          start: "30% 50%",
          end: "50% 50%",
          scrub: 1,
        },
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part2",
        scroller: "body",
        start: "0% 70%",
        end: "50% 50%",
        scrub: 1,
      },
    });
    tl.fromTo(
      ".roundedDivWrapper",
      {
        height: 100,
        marginTop: "-3.8vw",
      },
      {
        height: 0,
        marginTop: 0,
      }
    );
  });
  return (
    <div className="part2 w-[100%] bg-secondary">
      {/* //rounded div */}
      <div className="hidden sm:flex roundedDivWrapper relative w-[100%] h-[100px] overflow-hidden ">
        <div className="roundedDiv w-[150%] h-[750%] rounded-[50%] bg-secondary absolute left-1/2 -translate-x-1/2 "></div>
      </div>
      {/* <div class="roundedDivWrapper absolute w-full h-[150px] overflow-hidden rounded-[100%] left-0 top-0 -translate-y-1/2 z-10">
            <div class="w-full h-1/2 bg-secondary"></div>
        </div> */}

      <div className="content2 w-[100%] h-[50vh] sm:h-[100vh] relative flex items-center px-[5vw] sm:px-[2.5vw] overflow-hidden">
        <div className="textArea absolute left-[5%] sm:left-[2%] opacity-[.2] text-[10vw] leading-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap ">
          <h2>Strategic design solutions</h2>
        </div>
        <div className="textAreaHover absolute left-[5%] sm:left-[2%] opacity-100 text-[10vw] leading-[10vw] sm:text-[7vw]  tracking-tighter sm:whitespace-nowrap ">
          <h2 className=" overflow-hidden w-[100%] sm:w-[0%]">
            Strategic design solutions
          </h2>
        </div>
        <div className="textArea absolute sm:left-[10%] left-[5%] mt-[40vw] sm:mt-[18vw]  opacity-[.2] leading-[10vw] text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap">
          <h2>that fuel your bottom line.</h2>
        </div>
        <div className="textAreaHover2  absolute left-[5%] sm:left-[10%] mt-[40vw] sm:mt-[18vw] leading-[10vw]  opacity-100 text-[10vw]  sm:text-[7vw] tracking-tighter sm:whitespace-nowrap">
          <h2 className="overflow-hidden w-[100%] sm:w-[0%]">
            that fuel your bottom line.
          </h2>
        </div>
      </div>

      <div className=" px-[5vw] sm:px-[2.5vw] sm:flex items-center justify-between pb-[12vw] sm:pb-[4vw] pt-[14vw] sm:pt-0">
        <h3 className="text-[4vw] sm:text-[1.2vw] text-textComplimentary tracking-tight mb-[4vw] sm:mb-0">
          Unlock profit with monthly design sprints.
        </h3>
        <div className="cta flex items-center justify-between sm:gap-[1vw] cursor-pointer">
          <div className="button bg-buttonPrimary p-4 rounded-full">
            <div className="h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-center">
              <h2 className="text-white mb-1 sm:mb-0">
                <ion-icon name="logo-whatsapp"></ion-icon>
                {isID ? " Pesan Sekarang!" : " Book now!"}
              </h2>
              <h2 className="text-white">
                <ion-icon name="logo-whatsapp"></ion-icon>
                {isID ? " Pesan Sekarang!" : " Book now!"}
              </h2>
            </div>
          </div>
          <div className="button bg-buttonSecondary p-4 rounded-full">
            <div className="h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[8vw] tracking-tight text-gray text-center">
              <h2 className="mb-1 sm:mb-0">
                {isID ? "Lihat" : "View"} Price List
              </h2>
              <h2>{isID ? "Lihat" : "View"} Price List</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;