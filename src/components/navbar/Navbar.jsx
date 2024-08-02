import { memo } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ isID, toggleLanguage }) {
  return (
    <div className="fixed w-full flex items-center justify-between px-[5vw] py-[4vw] sm:px-[2.5vw] cursor-pointer sm:py-[2vw] z-30 mix-blend-difference">
      <div className="lftNav h-[4.5vw] sm:h-[2vw]  overflow-hidden text-[4.5vw] leading-[5vw] sm:text-[1.5vw] sm:leading-[1.8vw] tracking-tighter text-[#fff]">
        <Link to="/">
          <img
            src="https://lensakita-images.vercel.app/images/logo-lk-white.png"
            alt="lensakita"
            className="logo w-[5rem] sm:w-[8rem]"
          />
          <img
            src="https://lensakita-images.vercel.app/images/logo-lk-white.png"
            alt="lensakita"
            className="logo w-[5rem] sm:w-[8rem] pt-[0.2rem]"
          />
        </Link>
      </div>
      <div className="flex justify-beetween sm:gap-x-8 gap-x-6">
        <div className="rghtNav h-[3.5vw] sm:h-[1.5vw] text-[3vw] leading-[4vw] overflow-hidden sm:text-[1vw] sm:leading-[1.4vw]  tracking-tight text-[#fff]">
          <Link to="/">
            <h3 className="">{isID ? "Beranda" : "Home"}</h3>
            <h3 className="">{isID ? "Beranda" : "Home"}</h3>
          </Link>
        </div>
        <div className="rghtNav h-[3.5vw] sm:h-[1.5vw] text-[3vw] leading-[4vw] overflow-hidden sm:text-[1vw] sm:leading-[1.4vw]  tracking-tight text-[#fff]">
          <Link to="/pricelist">
            <h3 className="">Price List</h3>
            <h3 className="">Price List</h3>
          </Link>
        </div>
        <div className="rghtNav h-[3.5vw] sm:h-[1.5vw] text-[3vw] leading-[4vw] overflow-hidden sm:text-[1vw] sm:leading-[1.4vw]  tracking-tight text-[#fff]">
          <Link to="/gallery">
            <h3 className="">{isID ? "Galeri" : "Gallery"}</h3>
            <h3 className="">{isID ? "Galeri" : "Gallery"}</h3>
          </Link>
        </div>
        <div className="rghtNav h-[1.2rem] sm:h-[1.5rem] text-[0.7rem] leading-[4vw] overflow-hidden sm:text-[1vw] sm:leading-[1.4vw]  tracking-tight text-[#fff]">
          <div onClick={toggleLanguage} className="border px-2 rounded-full">
            {isID ? "ID" : "EN"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
