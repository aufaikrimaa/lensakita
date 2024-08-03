import { useEffect, useRef, useState, memo, useContext } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { LanguageContext } from "../App";
import { pricelistData } from "../data/pricelistData";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FormData from "../components/form/FormData";
import SwiperPriceList from "../components/pricelist/SwiperPriceList";
import ButtonDetailPricelist from "../components/pricelist/ButtonDetailPricelist";
import "../components/pricelist/pricelist.css";

function DetailPack() {
  const { isID } = useContext(LanguageContext);

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

  const allPackages = [
    ...pricelistData.wedding.data,
    ...pricelistData.school.data,
    ...pricelistData.anotherEvents.data,
  ];

  const selectedPackage = allPackages.find((pkg) => pkg.id === id);

  let packages = [];
  if (
    selectedPackage.id.includes("W") ||
    selectedPackage.id.includes("E") ||
    selectedPackage.id.includes("P")
  ) {
    packages = [...pricelistData.wedding.data];
  } else if (selectedPackage.id.includes("V")) {
    packages = [...pricelistData.anotherEvents.data];
  } else if (selectedPackage.id.includes("S")) {
    packages = [...pricelistData.school.data];
  }
  // else if (selectedPackage.id.includes("T")) {
  //   packages = [...pricelistData.tour.data];
  // }

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  // console.log(packages);
  // console.log(isOpen);
  return (
    <div className="bg-white">
      <Navbar />

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
          className="self-center bg-white mx-4 rounded-lg sm:flex sm:h-[30rem] sm:w-[60vw]"
        >
          <div className="h-[16rem] w-full sm:h-full sm:w-2/5 relative">
            <img
              src={selectedPackage.photo}
              className="object-cover w-full h-full xs:rounded-t-lg sm:rounded-l-lg "
            />
            <div className="absolute z-20 h-full w-full top-0 bg-gradient-to-t from-[#001B0A] to-[#001B0A33] xs:rounded-t-lg sm:rounded-l-lg grid content-end p-4 text-white">
              <div className="sm:text-xl 2xl:text-2xl font-semibold">
                {isID ? selectedPackage.title.id : selectedPackage.title.en}
                {selectedPackage.pack === "" ? "" : "-" + selectedPackage.pack}
              </div>
              <div className="text-lg ">{selectedPackage.price}</div>
            </div>
          </div>
          <div className="sm:w-3/5 p-8">
            <FormData
              id={selectedPackage.id}
              title={isID ? selectedPackage.title.id : selectedPackage.title.en}
              pack={selectedPackage.pack}
              price={selectedPackage.price}
              close={handleModalClose}
            />
          </div>
        </div>
      </div>

      <div className="px-[5vw] sm:px-[2.5vw] pt-16 sm:pt-24 mb-20">
        <div className="sm:flex justify-between sm:h-[30rem]">
          <div className="h-[16rem] sm:h-[30rem] w-full sm:w-1/3">
            <img
              src={selectedPackage.photo}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="sm:w-5/12 sm:relative">
            <div className="flex justify-between mb-5 sm:mb-6 mt-6 sm:mt-0">
              <div className="text-base sm:text-xl font-semibold self-center">
                {isID ? selectedPackage.title.id : selectedPackage.title.en}
                {selectedPackage.pack === "" ? "" : "-" + selectedPackage.pack}
              </div>
              <div className="text-xl sm:text-3xl font-bold text-textTitle">
                {selectedPackage.price}
              </div>
            </div>

            <div className="font-semibold text-xs sm:text-base">Detail :</div>
            <div className="detail text-xs sm:text-base">
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
            <div className="mt-8">
              <ButtonDetailPricelist handleOpen={() => setIsOpen(true)} />
            </div>
          </div>
          <div className="mt-8 block sm:hidden mb-12">
            <SwiperPriceList packages={packages} id={id} />
          </div>
          <div className="sm:w-1/5 bg-lightGray rounded-lg p-3">
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
                        : item.details.en.map((d, i) => (
                            <div key={i}>
                              <ion-icon name="radio-button-on-outline"></ion-icon>
                              {d}
                            </div>
                          ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mt-20 hidden sm:block">
          <SwiperPriceList packages={packages} id={id} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default memo(DetailPack);
