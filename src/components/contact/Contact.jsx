import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-100vh)] h-[100vh]">
          <div className="part8 w-full h-[100vh] bg-secondary flex items-center justify-center relative">
            <div className="w-full flex flex-col items-center">
              <div className=" flex flex-col items-center gap-[2vw]">
                <div className="text-[12vw] sm:text-[8vw] tracking-tighter sm:leading-[8vw]">
                  <img
                    src="https://lensakita-images.vercel.app/images/logo-lk-green.png"
                    className=" h-[8rem]"
                  />
                </div>
                <div className="text-[4vw] mb-[4vw] sm:text-[1.5vw] text-center tracking-tighter sm:mb-[1vw]">
                  <div className="footPtag overflow-hidden">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                  </div>
                  <div className="footPtag overflow-hidden">
                    <p>
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <button
                  color="bg-primary"
                  text="Book a demo"
                  color2="text-secondary"
                />
              </div>
              <h5 className="absolute bottom-10 tracking-tighter">
                © LensaKita 2024
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
