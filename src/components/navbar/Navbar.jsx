import { memo, useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../App";

function Navbar() {
  const { isID, toggleLanguage } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const threshold = location.pathname === "/" ? 1300 : 20;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", labelId: "Beranda", labelEn: "Home" },
    { to: "/pricelist", labelId: "Harga", labelEn: "Pricing" },
    { to: "/gallery", labelId: "Galeri", labelEn: "Gallery" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={
                  isScrolled
                    ? "https://lensakita-images.vercel.app/images/logo-lk-green.png"
                    : "https://lensakita-images.vercel.app/images/logo-lk-white.png"
                }
                alt="Lensakita"
                className="h-6 sm:h-8 transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative overflow-hidden group text-sm font-medium"
                >
                  <span
                    className={`block transition-transform duration-500 ${
                      isActive(link.to)
                        ? isScrolled
                          ? "text-brand-600"
                          : "text-white"
                        : isScrolled
                          ? "text-slate-600"
                          : "text-white/70"
                    } group-hover:-translate-y-full`}
                  >
                    {isID ? link.labelId : link.labelEn}
                  </span>

                  <span
                    className={`absolute left-0 top-full block transition-transform duration-500 ${
                      isActive(link.to)
                        ? isScrolled
                          ? "text-brand-600"
                          : "text-white"
                        : isScrolled
                          ? "text-slate-600"
                          : "text-white/70"
                    } group-hover:-translate-y-full`}
                  >
                    {isID ? link.labelId : link.labelEn}
                  </span>
                </Link>
              ))}
               <button
                onClick={toggleLanguage}
                className={`ml-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  isScrolled
                    ? "border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {isID ? "ID" : "EN"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`sm:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {isID ? link.labelId : link.labelEn}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full mt-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              {isID ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
