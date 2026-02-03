import { useEffect, useRef, useState, memo, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { LanguageContext } from "../App";
import { pricelistData } from "../data/pricelistData";
import { number } from "../data/contactData";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FormData from "../components/form/FormData";
import SwiperPriceList from "../components/pricelist/SwiperPriceList";

function DetailPack() {
  const { isID } = useContext(LanguageContext);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

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

  const allPackages = [
    ...pricelistData.wedding.data,
    ...pricelistData.school.data,
    ...pricelistData.anotherEvents.data,
  ];

  const selectedPackage = allPackages.find((pkg) => pkg.id === id);

  let packages = [];
  if (
    selectedPackage?.id.includes("W") ||
    selectedPackage?.id.includes("E") ||
    selectedPackage?.id.includes("P")
  ) {
    packages = [...pricelistData.wedding.data];
  } else if (selectedPackage?.id.includes("V")) {
    packages = [...pricelistData.anotherEvents.data];
  } else if (selectedPackage?.id.includes("S")) {
    packages = [...pricelistData.school.data];
  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ion-icon name="alert-circle-outline" style={{ fontSize: "2rem", color: "#94a3b8" }}></ion-icon>
          </div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Package not found</h2>
          <Link to="/pricelist" className="text-brand-600 hover:underline">
            Back to packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            ref={overlayRef}
            onClick={handleModalClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0"
          />
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <img
                  src={selectedPackage.photo}
                  className="w-full h-48 md:h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg">
                    {isID ? selectedPackage.title.id : selectedPackage.title.en}
                    {selectedPackage.pack && ` - ${selectedPackage.pack}`}
                  </h3>
                  <p className="text-white/80 text-lg">{selectedPackage.price}</p>
                </div>
              </div>
              <div className="md:w-3/5 p-6">
                <button
                  onClick={handleModalClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <ion-icon name="close-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
                </button>
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
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 pt-20">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-slate-500 hover:text-slate-700">
              {isID ? "Beranda" : "Home"}
            </Link>
            <ion-icon name="chevron-forward-outline" style={{ fontSize: "0.875rem", color: "#94a3b8" }}></ion-icon>
            <Link to="/pricelist" className="text-slate-500 hover:text-slate-700">
              {isID ? "Harga" : "Pricing"}
            </Link>
            <ion-icon name="chevron-forward-outline" style={{ fontSize: "0.875rem", color: "#94a3b8" }}></ion-icon>
            <span className="text-slate-900 font-medium">
              {isID ? selectedPackage.title.id : selectedPackage.title.en}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-8 sm:py-12">
        <div className="lg:flex lg:gap-12">
          {/* Image */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <div className="sticky top-28">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200">
                <img
                  src={selectedPackage.photo}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-3/5">
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                    {isID ? selectedPackage.title.id : selectedPackage.title.en}
                    {selectedPackage.pack && (
                      <span className="text-slate-500 font-normal"> - {selectedPackage.pack}</span>
                    )}
                  </h1>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl font-bold text-brand-600">
                    {selectedPackage.price}
                  </p>
                </div>
              </div>

              {/* Details List */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <ion-icon name="list-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
                  {isID ? "Termasuk dalam paket:" : "Package includes:"}
                </h3>
                <ul className="space-y-3">
                  {(isID ? selectedPackage.details.id : selectedPackage.details.en).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ion-icon name="checkmark" style={{ fontSize: "0.75rem", color: "#16a34a" }}></ion-icon>
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-primary flex-1"
                >
                  <ion-icon name="cart-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
                  {isID ? "Pesan Sekarang" : "Book Now"}
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/${number}`, "_blank")}
                  className="btn-secondary flex-1"
                >
                  <ion-icon name="logo-whatsapp" style={{ fontSize: "1.25rem" }}></ion-icon>
                  {isID ? "Diskusikan" : "Discuss"}
                </button>
              </div>
            </div>

            {/* Additional Services */}
            {pricelistData.additionalServices && pricelistData.additionalServices.length > 0 && (
              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-1">
                  {isID ? "Layanan Tambahan" : "Additional Services"}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {isID
                    ? "Dapat dipesan terpisah atau ditambahkan ke paket"
                    : "Can be ordered separately or added to the package"}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pricelistData.additionalServices.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{item.title}</h4>
                        <span className="text-brand-600 font-semibold text-sm">{item.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {(isID ? item.details.id : item.details.en).map((d, j) => (
                          <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Packages */}
        <div className="mt-16">
          <SwiperPriceList packages={packages} id={id} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default memo(DetailPack);
