import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { number, ContactAndMedsocData } from "../../data/contactData";
import { LanguageContext } from "../../App";

function Footer() {
  const { isID } = useContext(LanguageContext);

  const services = [
    { labelId: "Acara Sekolah", labelEn: "School Events" },
    { labelId: "Pernikahan", labelEn: "Wedding" },
    { labelId: "Paket Event", labelEn: "Event Package" },
    { labelId: "Paket Drone", labelEn: "Drone Package" },
    { labelId: "Custom Request", labelEn: "Custom Request" },
  ];

  const navLinks = [
    { to: "/", labelId: "Beranda", labelEn: "Home" },
    { to: "/pricelist", labelId: "Harga", labelEn: "Pricing" },
    { to: "/gallery", labelId: "Galeri", labelEn: "Gallery" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://lensakita-images.vercel.app/images/logo-lk-white.png"
              alt="Lensakita"
              className="h-8 mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {isID
                ? "Jasa dokumentasi profesional untuk setiap momen berharga Anda."
                : "Professional documentation services for your precious moments."}
            </p>
            <div className="flex gap-3">
              {ContactAndMedsocData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => window.open(item.link, "_blank")}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <img src={item.img} className="w-5 h-5" alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {isID ? "Layanan" : "Services"}
            </h4>
            <ul className="space-y-2.5">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    to="/pricelist"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {isID ? service.labelId : service.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {isID ? link.labelId : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {isID ? "Kontak" : "Contact"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+${number}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <ion-icon name="call-outline"></ion-icon>
                  +{number}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:lensakitap@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                  lensakitap@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LensaKita. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>Made with</span>
            <ion-icon name="heart" style={{ color: "#ef4444" }}></ion-icon>
            <span>in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
