import { memo } from "react";
import { Link } from "react-router-dom";
import { number, ContactAndMedsocData } from "../../data/contactData";
import "./footer.css";

function Footer({ isID }) {
  return (
    <div className="sm:h-[20rem] px-[5vw] sm:px-[12vw] border-t-4 border-lightGray py-4 relative">
      <div className="flex flex-wrap sm:justify-between h-full gap-8 mb-12 sm:mb-0">
        <div className="self-center grid gap-y-4">
          <img
            src="https://lensakita-images.vercel.app/images/logo-lk-green.png"
            className="h-8"
          />
          <div className="text-xs">
            {isID ? (
              <>
                Jasa Photography dan Videography untuk kebutuhan
                <br /> dan acara apapun
              </>
            ) : (
              <>
                Photography and Videography Services for Any Needs
                <br /> and Events
              </>
            )}
          </div>
          <div className="flex gap-2">
            {ContactAndMedsocData.map((item, i) => (
              <img
                key={i}
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
                src={item.img}
                className="h-7 sm:h-9 w-auto hover:scale-125 transition ease-in-out cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="self-center grid gap-y-2 sm:gap-y-4">
          <div className="text-base sm:text-lg font-semibold">
            {isID ? "Kontak" : "Contact"}
          </div>
          <div className="contact-footer text-[0.6rem] sm:text-sm grid gap-y-1 sm:gap-y-2">
            <div>
              <ion-icon name="call-outline"></ion-icon>+{number}
            </div>
            <div>
              <ion-icon name="logo-whatsapp"></ion-icon>+{number}
            </div>
            <div>
              <ion-icon name="mail-outline"></ion-icon>lensakitap@gmail.com
            </div>
          </div>
        </div>
        <div className="self-center grid gap-y-2 sm:gap-y-4">
          <div className="text-base sm:text-lg font-semibold">
            {isID ? "Layanan Kami" : "Our Services"}
          </div>
          <Link to="/pricelist">
            {" "}
            <div className="service-footer text-[0.6rem] sm:text-sm flex gap-4 cursor-pointer ">
              <div className="grid gap-y-1 sm:gap-y-2">
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Acara Sekolah" : "School Events"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Wisata Jeep & Liburan" : "Jeep Tour & Vacation"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Pernikahan & Lamaran" : "Wedding & Engagement"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Edit Video" : "Edit Video Package"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Events" : "Events Package"}
                </div>
              </div>
              <div className="grid gap-y-1 sm:gap-y-2">
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Drone" : "Drone Package"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Photographer" : "Photographer Package"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Videographer" : "Videographer Package"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Paket Lengkap" : "Full Package"}
                </div>
                <div>
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  {isID ? "Request Layanan" : "Custom Request"}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="self-center grid gap-y-2 sm:gap-y-4 hidden sm:block">
          <div className="text-base sm:text-lg font-semibold">Menu</div>
          <div className="service-footer text-xs sm:text-sm grid gap-y-1 sm:gap-y-2 cursor-pointer">
            <Link to="/">
              <ion-icon name="radio-button-on-outline"></ion-icon>
              {isID ? "Beranda" : "Home"}
            </Link>
            <Link to="/pricelist">
              <ion-icon name="radio-button-on-outline"></ion-icon>Price List
            </Link>
            <Link to="/gallery">
              <ion-icon name="radio-button-on-outline"></ion-icon>
              {isID ? "Galeri" : "Gallery"}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-[5vw] sm:px-[2.5vw]">
        <div className="bg-buttonPrimary rounded-t-3xl text-white text-center py-2">
          © LensaKita 2024
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
