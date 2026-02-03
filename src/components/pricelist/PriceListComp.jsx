import { useState, useEffect, useRef, memo, useContext, useMemo } from "react";
import { gsap } from "gsap";
import { pricelistData } from "../../data/pricelistData";
import { LanguageContext } from "../../App";
import HowToBook from "./HowToBook";
import PriceListCard from "./PricelistCard";
import Footer from "../footer/Footer";

const categories = [
  { id: "all", icon: "grid-outline", labelId: "Semua", labelEn: "All" },
  { id: "school", icon: "school-outline", labelId: "Sekolah", labelEn: "School" },
  { id: "wd", icon: "heart-outline", labelId: "Wedding", labelEn: "Wedding" },
  { id: "anev", icon: "calendar-outline", labelId: "Event", labelEn: "Event" },
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
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="container-main text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm font-medium mb-4">
            {isID ? "Paket Dokumentasi" : "Documentation Packages"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {isID ? "Pilih Paket Terbaik" : "Choose Your Best Package"}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            {isID
              ? "Layanan dokumentasi profesional untuk setiap momen berharga Anda"
              : "Professional documentation services for your precious moments"}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="container-main">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setMenu(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  menu === cat.id
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <ion-icon name={cat.icon} style={{ fontSize: "1rem" }}></ion-icon>
                {isID ? cat.labelId : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-8 sm:py-12">
        <div className="lg:flex lg:gap-8">
          {/* Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ion-icon name="folder-open-outline" style={{ fontSize: "2rem", color: "#94a3b8" }}></ion-icon>
                </div>
                <p className="text-slate-500">{isID ? "Tidak ada paket tersedia" : "No packages available"}</p>
              </div>
            )}
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-36">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <HowToBook />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-30 w-14 h-14 bg-brand-600 text-white rounded-full shadow-xl shadow-brand-600/30 flex items-center justify-center hover:bg-brand-700 active:scale-95 transition-all"
      >
        <ion-icon name="help-circle-outline" style={{ fontSize: "1.75rem" }}></ion-icon>
      </button>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div
            ref={overlayRef}
            onClick={handleModalClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0"
          />
          <div
            ref={modalRef}
            className="relative w-full max-h-[85vh] bg-white rounded-t-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white pt-3 pb-2 px-6 border-b border-slate-100">
              <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">
                  {isID ? "Cara Pemesanan" : "How to Book"}
                </h3>
                <button
                  onClick={handleModalClose}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600"
                >
                  <ion-icon name="close-outline" style={{ fontSize: "1.5rem" }}></ion-icon>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              <HowToBook />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default memo(PriceListComp);
