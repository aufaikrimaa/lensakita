import { memo } from "react";
import { ContactAndMedsocData } from "../../data/contactData";

function Contact({ isID }) {
  return (
    <div
      className="relative h-[100vh] px-[5vw] sm:px-[2.5vw]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-100vh)] h-[100vh]">
          <div className="part8 w-full h-[100vh] bg-secondary flex items-center justify-center relative">
            <div className="w-full flex flex-col items-center">
              <div className=" flex flex-col items-center gap-[1.5vw]">
                <div className="text-[12vw] sm:text-[8vw] tracking-tighter sm:leading-[8vw] mb-[4rem]">
                  <img
                    src="https://lensakita-images.vercel.app/images/logo-lk-green.png"
                    className="h-[4rem] sm:h-[8rem]"
                  />
                </div>
                <div className="text-[4vw] mb-[4vw] sm:text-[1.5vw] text-center tracking-tighter sm:mb-[1vw]">
                  <div className="footPtag overflow-hidden font-semibold text-gray">
                    <p>
                      {isID
                        ? "Kontak & Media Sosial"
                        : "Contact & Social Media"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 sm:gap-6">
                  {ContactAndMedsocData.map((item, i) => (
                    <img
                      key={i}
                      onClick={() => {
                        window.open(item.link, "_blank");
                      }}
                      src={item.img}
                      className="h-10 sm:h-12 w-auto hover:scale-125 transition ease-in-out cursor-pointer"
                    />
                  ))}
                </div>
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

export default memo(Contact);
