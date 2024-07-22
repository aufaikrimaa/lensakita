import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { pricelistData } from "../data/pricelistData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { number } from "../data/contactData";
import Navbar from "../components/navbar/Navbar";
import PriceListCard from "../components/pricelist/PricelistCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../components/pricelist/pricelist.css";
import Footer from "../components/footer/Footer";
import FormData from "../components/form/FormData";

function DetailPack({ isID, toggleLanguage }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleModalClose = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

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

  // console.log(packages);
  // console.log(isOpen);
  return (
    <div className="bg-white">
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />

      {/* modal form */}
      <div
        onClick={handleModalClose}
        className={`${
          isOpen ? "block z-40" : "hidden"
        } h-screen w-full flex fixed justify-center`}
        style={{
          backgroundColor: "#001B0Ab4",
        }}
      >
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="self-center bg-white mx-4 rounded-lg flex h-[30rem] w-[60vw]"
        >
          <div className="h-full w-2/5 relative">
            <img
              src={selectedPackage.photo}
              className="object-cover h-full rounded-l-lg"
            />
            <div className="absolute z-20 h-full w-full top-0 bg-gradient-to-t from-[#001B0A] to-[#001B0A33] rounded-l-lg grid content-end p-4 text-white">
              <div className="text-xl 2xl:text-2xl font-semibold">
                {isID ? selectedPackage.title.id : selectedPackage.title.en} -{" "}
                {selectedPackage.pack}
              </div>
              <div className="text-lg ">{selectedPackage.price}</div>
            </div>
          </div>
          <div className="w-3/5 p-8">
            <FormData
              id={selectedPackage.id}
              title={isID ? selectedPackage.title.id : selectedPackage.title.en}
              pack={selectedPackage.pack}
              price={selectedPackage.price}
              isID={isID}
              close={handleModalClose}
            />
          </div>
        </div>
      </div>

      <div className="px-[5vw] sm:px-[2.5vw] pt-24 mb-20">
        <div className="flex justify-between h-[30rem]">
          <div className="h-[30rem] w-1/3">
            <img
              src={selectedPackage.photo}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-5/12 relative">
            <div className="flex justify-between mb-6">
              <div className="text-xl font-semibold self-center">
                {isID ? selectedPackage.title.id : selectedPackage.title.en} -{" "}
                {selectedPackage.pack}
              </div>
              <div className="text-3xl font-bold text-textTitle">
                {selectedPackage.price}
              </div>
            </div>

            <div className="font-semibold">Detail :</div>
            <div className="detail">
              {isID
                ? selectedPackage.details.id.map((item, i) => (
                    <div key={i} className="py-[0.1rem]">
                      <ion-icon name="camera-outline"></ion-icon> {item}
                    </div>
                  ))
                : selectedPackage.details.en.map((item, i) => (
                    <div key={i} className="">
                      <ion-icon name="camera-outline"></ion-icon> {item}
                    </div>
                  ))}
            </div>
            <div className="flex justify-end absolute bottom-0 w-full gap-2">
              <div
                className="button bg-buttonSecondary p-4 rounded-full cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <div className="h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-gray text-center">
                  <h2 className="mb-1 sm:mb-0">
                    {isID ? " Pesan Sekarang!" : " Book now!"}
                  </h2>
                  <h2> {isID ? " Pesan Sekarang!" : " Book now!"}</h2>
                </div>
              </div>
              <div
                onClick={() => {
                  window.open(`whatsapp://send?phone=${number}`, "_blank");
                }}
                className="button bg-buttonPrimary p-4 rounded-full cursor-pointer"
              >
                <div className="about-icon h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-center">
                  <h2 className="text-white mb-1 sm:mb-0">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    {isID ? " Diskusikan!" : " Let's Discuss!"}
                  </h2>
                  <h2 className="text-white">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    {isID ? " Diskusikan!" : " Let's Discuss!"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 bg-lightGray rounded-lg p-3">
            <div className="text-lg font-semibold text-textTitle">
              {isID ? "Layanan Tambahan" : "Additional Service"}
            </div>
            <div className="text-xs italic">
              {isID
                ? "Layanan ini bisa dipesan secara terpisah (ada beberapa dari layanan ini yang sudah masuk ke dalam paket)"
                : "This service can be ordered separately (some of these services are already included in the package)"}
            </div>
            {pricelistData.additionalServices ? (
              <div className="detailAdd">
                {pricelistData.additionalServices.map((item, i) => (
                  <div key={i} className=" my-8">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-textTitle">{item.price}</div>
                    <div className="text-sm">
                      {isID
                        ? item.details.id.map((d, i) => (
                            <div key={i}>
                              <ion-icon name="radio-button-on-outline"></ion-icon>
                              {d}
                            </div>
                          ))
                        : item.details.en}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mt-20">
          <div className="text-lg font-semibold py-2">
            {isID ? "Paket Lainnya :" : "Another Package :"}
          </div>
          <div className="text-[">
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

      <Footer isID={isID} />
    </div>
  );
}

export default DetailPack;
