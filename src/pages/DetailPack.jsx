import { useParams } from "react-router-dom";
import { pricelistData } from "../data/pricelistData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import Navbar from "../components/navbar/Navbar";
import PriceListCard from "../components/pricelist/PricelistCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../components/pricelist/pricelist.css";

function DetailPack({ isID, toggleLanguage }) {
  const { id } = useParams();

  const allPackages = [...pricelistData.wedding.data];

  const selectedPackage = allPackages.find((pkg) => pkg.id === id);

  let packages = [];
  if (
    selectedPackage.id.includes("W") ||
    selectedPackage.id.includes("E") ||
    selectedPackage.id.includes("P")
  ) {
    packages = [...pricelistData.wedding.data];
  }

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  console.log(packages);
  return (
    <div className="bg-white">
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <div className="px-[5vw] sm:px-[2.5vw] pt-24">
        <div className="flex justify-between">
          <div className="h-[60vh] w-1/3">
            <img
              src={selectedPackage.photo}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-5/12">
            <div>
              {isID ? selectedPackage.title.id : selectedPackage.title.en}
              {selectedPackage.pack}
            </div>
            <div>{selectedPackage.price}</div>
            <div>
              {isID
                ? selectedPackage.details.id.map((item, i) => (
                    <div key={i} className="">
                      {item}
                    </div>
                  ))
                : selectedPackage.details.en.map((item, i) => (
                    <div key={i} className="">
                      {item}
                    </div>
                  ))}
            </div>
          </div>
          <div className="w-1/5 bg-lightGray rounded-lg">
            {pricelistData.additionalServices ? (
              <div>
                {pricelistData.additionalServices.map((item, i) => (
                  <div key={i} className="">
                    {item.title}
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="flex overflow-x-auto">
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
      </div>
    </div>
  );
}

export default DetailPack;
