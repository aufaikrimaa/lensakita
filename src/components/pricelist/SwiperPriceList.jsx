import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import PriceListCard from "./PricelistCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function SwiperPriceList({ packages, isID, id }) {
  return (
    <>
      <div className="text-sm sm:text-lg font-semibold py-2">
        {isID ? "Paket Lainnya :" : "Another Package :"}
      </div>
      <div className="">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          className="swiper-photos"
        >
          {packages.map((item, i) => (
            <SwiperSlide key={i} className="relative">
              <PriceListCard
                id={item.id}
                photo={item.photo}
                title={isID ? item.title.id : item.title.en}
                pack={item.pack}
                price={item.price}
              />
              <div
                className={`absolute h-full w-full bg-primary z-20 top-0 rounded-lg opacity-10 ${
                  item.id === id ? "block" : "hidden"
                }`}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default memo(SwiperPriceList);
