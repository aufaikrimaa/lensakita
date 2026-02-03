import { useState, useEffect, useRef, memo, useContext, useMemo } from "react";
import { gsap } from "gsap";
import { pricelistData } from "../../data/pricelistData";
import { LanguageContext } from "../../App";
import HowToBook from "./HowToBook";
import PriceListCard from "./PricelistCard";
import Footer from "../footer/Footer";
import "./pricelist.css";

const categories = [
  { id: "all", icon: "albums-outline", labelId: "Semua", labelEn: "All" },
  { id: "school", icon: "school-outline", labelId: "Sekolah", labelEn: "School" },
  { id: "wd", icon: "heart-circle-outline", labelId: "Pernikahan", labelEn: "Wedding" },
  { id: "anev", icon: "film-outline", labelId: "Lainnya", labelEn: "Others" },
];

function PriceListComp() {
  const { isID } = useContext(LanguageContext);

  const [menu, setMenu] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const filteredItems = useMemo(() => {
    const items = [];
    if (menu === "all" || menu === "anev") {
      items.push(...pricelistData.anotherEvents.data);
    }
    if (menu === "all" || menu === "school") {
      items.push(...pricelistData.school.data);
    }
    if (menu === "all" || menu === "wd") {
      items.push(...pricelistData.wedding.data);
    }
    return items;
  }, [menu]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleModalClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Mobile FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-30 w-14 h-14 bg-buttonPrimary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all active:scale-95"
        aria-label="How to book"
      >
        <ion-icon name="help-circle-outline" style={{ fontSize: "1.75rem" }}></ion-icon>
      </button>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center">
          <div
            ref={overlayRef}
            onClick={handleModalClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0"
          />
          <div
            ref={modalRef}
            className="relative w-full max-h-[85vh] bg-white rounded-t-3xl p-6 pb-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <ion-icon name="close-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
            </button>
            <HowToBook />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-20 sm:pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              {isID ? "Daftar Harga" : "Price List"}
            </h1>
            <p className="text-gray text-sm sm:text-base">
              {isID
                ? "Pilih paket dokumentasi yang sesuai kebutuhanmu"
                : "Choose a documentation package that suits your needs"}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1.5 gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setMenu(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    menu === cat.id
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray hover:text-primary hover:bg-white/50"
                  }`}
                >
                  <ion-icon name={cat.icon} style={{ fontSize: "1.1rem" }}></ion-icon>
                  <span className="hidden sm:inline">
                    {isID ? cat.labelId : cat.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="lg:flex lg:gap-8">
            {/* Price Cards Grid */}
            <div className="lg:flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.map((item) => (
                  <PriceListCard
                    key={item.id}
                    id={item.id}
                    photo={item.photo}
                    title={isID ? item.title.id : item.title.en}
                    pack={item.pack}
                    price={item.price}
                  />
                ))}
              </div>
              {filteredItems.length === 0 && (
                <div className="text-center py-16 text-gray">
                  <ion-icon name="folder-open-outline" style={{ fontSize: "3rem" }}></ion-icon>
                  <p className="mt-2">{isID ? "Tidak ada paket tersedia" : "No packages available"}</p>
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:w-96 lg:flex-shrink-0">
              <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <HowToBook />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer for mobile */}
      <div className="lg:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default memo(PriceListComp);
