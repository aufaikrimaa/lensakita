import { memo } from "react";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import service4 from "../../assets/service4.svg";
import service5 from "../../assets/service5.svg";
import { number } from "../../data/contactData";

function HowToBook({ isID }) {
  return (
    <div>
      <div className="text-gray font-bold text-lg sm:text-xl 2xl:text-2xl">
        {isID
          ? "Cara memesan layanan dokumentasi"
          : "How to book a documentation service"}
      </div>
      <div className="text-[0.6rem] 2xl:text-xs">
        {isID
          ? "Kamu bisa langsung hubungi kami melalui kontak yang sudah tersedia atau ikuti langkah berikut kalau kamu masih bingung!"
          : "You can contact us directly through the available contact options or follow these steps if you’re still unsure!"}
      </div>
      <div className="text-[0.65rem] 2xl:text-xs">
        <div className="flex mt-8">
          <img src={service1} className="w-[2.8rem] 2xl:w-[3.8rem] mr-3" />
          <div className="self-center">
            {isID
              ? "Kunjungi dan jelajahi webite resmi Lensakita"
              : "Visit and explore the official Lensakita website"}
          </div>
        </div>
        <div className="flex mt-8 justify-end">
          <div className="self-center">
            {isID
              ? " Masuk ke menu price list dan tentukan layanan yang akan kamu pesan, kamu juga bisa memesan selain layanan yang tertera dengan masuk ke menu acara lain"
              : "Go to the price list menu and choose the service you want to book. You can also book services not listed by going to the other events menu"}
          </div>
          <img src={service2} className="w-[2.8rem] 2xl:w-[3.8rem] ml-3" />
        </div>
        <div className="flex mt-8">
          <img src={service3} className="w-[2.8rem] 2xl:w-[3.8rem] mr-3" />
          <div className="self-center">
            {isID
              ? "Klik button “pesan” dan isi data untuk memesan layanan dari kami, selanjutnya tinggal menunggu kami hubungi"
              : 'Click the "order" button and fill out the form to book our service, then wait for us to contact you'}
          </div>
        </div>
        <div className="flex mt-8 justify-end">
          <div className="self-center">
            {isID
              ? "Kamu juga bisa langsung melakukan konfirmasi pesananmu melalui kontak whatsapp kami atau klik pada button “Diskusi”, tentukan kesepakatan dan metode pembayaran dari layanan yang kamu pesan"
              : "You can also directly confirm your order through our WhatsApp contact or click the “Discussion” button to finalize the agreement and payment method for the services you ordered."}
          </div>
          <img src={service4} className="w-[2.8rem] 2xl:w-[3.8rem] ml-3" />
        </div>
        <div className="flex mt-8">
          <img src={service5} className="w-[2.8rem] 2xl:w-[3.8rem] mr-3" />
          <div className="self-center">
            {isID
              ? "Setelah mencapai kesepakatan dari diskusi, saatnya mendokumentasikan moment yang kamu miliki bersama kami"
              : "After reaching an agreement from the discussion, it's time to document your moments with us"}
          </div>
        </div>
      </div>
      <div className="flex mt-10 sm:mt-3 2xl:mt-4 justify-end">
        <div
          onClick={() => {
            window.open(`whatsapp://send?phone=${number}`, "_blank");
          }}
          className="button bg-buttonPrimary p-2 rounded-full  flex justify-end sm:w-[30%]"
        >
          <div className="pricelist-icon h-[1.1rem] 2xl:h-[1.5rem] leading-[4vw] overflow-hidden text-[0.7rem] 2xl:text-sm sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-center">
            <h2 className="text-white mb-1 sm:mb-0">
              <ion-icon name="logo-whatsapp"></ion-icon>
              {isID ? " Pesan Sekarang!" : " Book now!"}
            </h2>
            <h2 className="text-white">
              <ion-icon name="logo-whatsapp"></ion-icon>
              {isID ? " Pesan Sekarang!" : " Book now!"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HowToBook);
