import { memo, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { serviceData } from "../../data/serviceData";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import "swiper/css";
import "swiper/css/pagination";

function ServiceSlide() {
  const { isID } = useContext(LanguageContext);

  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        speed={1000}
        grabCursor={true}
        loop={true}
        className="mySwiper"
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="slider h-screen bg-local"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className="h-screen text-white flex items-center "
                style={{
                  backgroundColor: "#001B0Ab4",
                }}
              >
                <div className="px-[5vw] sm:px-[8vw] pt-[22rem] sm:pt-[16rem]">
                  <div className="text-3xl sm:text-6xl font-bold">
                    {item.title}
                  </div>
                  <div className="my-[0.5rem] sm:my-[1rem]">
                    ━━━━━━━━━━━━━━━━━━━━━━━━
                  </div>
                  <div className="text-base sm:text-2xl">
                    {isID ? item.descID : item.descEN}
                  </div>
                  <div className="w-[40vw] sm:w-[14vw] mt-[1.5rem] sm:mt-[2rem]">
                    <Link to="/pricelist">
                      <div className="button bg-buttonPrimary py-4 rounded-full flex justify-center">
                        <div className="h-[0.9rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-white text-center">
                          <h2 className="mb-1 sm:mb-0">
                            {isID ? "Lihat" : "View"} Price List
                          </h2>
                          <h2>{isID ? "Lihat" : "View"} Price List</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default memo(ServiceSlide);
