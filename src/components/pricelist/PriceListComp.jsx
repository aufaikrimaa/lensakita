import { useState } from "react";
import Masonry from "react-masonry-css";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import service4 from "../../assets/service4.svg";
import service5 from "../../assets/service5.svg";
import "./pricelist.css";

function PriceListComp({ isID }) {
  const [menu, setMenu] = useState("all");

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };
  return (
    <div className="relative bg-secondary px-[5vw] sm:px-[2.5vw]">
      <div className="h-[6rem] sm:h-[5rem] bg-white fixed w-full z-10"></div>
      <div className="sm:flex py-[5vw] sm:py-[vw]">
        <div className="pricelist-content bg-white w-[90vw] sm:w-[55vw] fixed mt-4 sm:mt-0 flex flex-col items-center sm:items-start z-20">
          <div className="w-full overflow-x-auto  gap-x-1 text-xs mt-8 sm:mt-0 justify-center sm:pr-4">
            <div className="inline-flex space-x-1">
              <div
                className={`grid justify-items-center w-[6rem] sm:w-[10rem] my-1 p-1 sm:p-2 hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                  menu === "all" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("all")}
              >
                <div className="">
                  <ion-icon name="albums-outline"></ion-icon>
                </div>
                {isID ? "Semua" : "All"}
              </div>
              <div
                className={`grid justify-items-center w-[6rem] sm:w-[10rem]  my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                  menu === "school" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("school")}
              >
                <div className="">
                  <ion-icon name="school-outline"></ion-icon>
                </div>
                {isID ? "Acara Sekolah" : "School Events"}
              </div>
              <div
                className={`grid justify-items-center w-[6rem] sm:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                  menu === "jeep" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("jeep")}
              >
                <div className="">
                  <ion-icon name="car-outline"></ion-icon>
                </div>
                {isID ? "Wisata Jeep & Liburan" : "Jeep Tour & Vacation"}
              </div>
              <div
                className={`grid justify-items-center w-[6rem] sm:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                  menu === "wd" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("wd")}
              >
                <div className="">
                  <ion-icon name="heart-circle-outline"></ion-icon>
                </div>
                {isID ? "Pernikahan & Lamaran" : "Wedding & Engagement"}
              </div>
              <div
                className={`grid justify-items-center w-[6rem] sm:w-[10rem] my-1 p-1 sm:p-2  hover:bg-buttonSecondary cursor-pointer rounded-md transition ease-in-out text-center ${
                  menu === "anev" ? "bg-buttonSecondary" : ""
                }`}
                onClick={() => setMenu("anev")}
              >
                <div className="">
                  <ion-icon name="film-outline"></ion-icon>
                </div>
                {isID ? "Acara Lain" : "Another Events"}
              </div>
            </div>
          </div>
        </div>
        <div className="content w-full sm:w-[55vw] mt-[8rem] sm:mt-[5rem]">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="w-full my-masonry-grid flex"
            columnClassName="my-masonry-grid_column"
          >
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
            <div className=" bg-gray m-2">ss</div>
          </Masonry>

          {/* <div className={`${menu === "photos" ? "block" : "hidden"}`}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid flex"
              columnClassName="my-masonry-grid_column"
            >
              {dataPhoto.map((img, i) => (
                <div key={i} className="w-[96%] sm:w-70 m-1 sm:m-2">
                  <img src={img} className="rounded-md" />
                </div>
              ))}
            </Masonry>
          </div>

          <div
            className={`${
              menu === "videos" ? "block" : "hidden"
            } flex flex-wrap`}
          >
            {dataVideo.map((item, i) => (
              <VideoItem key={i} videoSrc={item.video} coverSrc={item.cover} />
            ))}
          </div> */}
        </div>
        <div className="mt-2 hidden sm:block">
          <div
            className="fixed h-[88%] w-[40%] rounded-xl p-8"
            style={{
              backgroundColor: "#F2F2F2",
            }}
          >
            <div className="text-gray font-bold text-2xl">
              {isID
                ? "Cara memesan layanan dokumentasi"
                : "How to book a documentation service"}
            </div>
            <div className="text-xs">
              {isID
                ? "Kamu bisa langsung hubungi kami melalui kontak yang sudah tersedia atau ikuti langkah berikut kalau kamu masih bingung!"
                : "You can contact us directly through the available contact options or follow these steps if you’re still unsure!"}
            </div>
            <div className="text-sm">
              <div className="flex mt-8">
                <img src={service1} className="w-16 mr-3" />
                <div className="self-center">
                  1. kunjungi dan jelajahi webite resmi lensakita
                </div>
              </div>
              <div className="flex mt-8 justify-end">
                <div className="self-center">
                  2. masuk ke menu price list dan tentukan layanan yang akan
                  kamu pesan, kamu juga bisa memesan selain layanan yang tertera
                  dengan masuk ke menu acara lain
                </div>
                <img src={service2} className="w-16 ml-3" />
              </div>
              <div className="flex mt-8">
                <img src={service3} className="w-16 mr-3" />
                <div className="self-center">
                  3. klik button “pesan” dan isi data untuk memesan layanan dari
                  kami, selanjutnya tinggal menunggu kami hubungi
                </div>
              </div>
              <div className="flex mt-8 justify-end">
                <div className="self-center">
                  4. kamu juga bisa langsung mengonfirmasi pesananmu melalui
                  kontak whatsapp kami atau klik pada button “diskusi”, kamu
                  juga boleh berdiskusi mengenai harga dari layanan yang kamu
                  pesan
                </div>
                <img src={service4} className="w-16 ml-3" />
              </div>
              <div className="flex mt-8">
                <img src={service5} className="w-16 mr-3" />
                <div className="self-center">
                  5. setelah mencapai kesepakatan dari diskusi, saatnya
                  mendokumentasikan moment yang kamu miliki bersama kami
                </div>
              </div>
            </div>
            <div className="flex mt-4 justify-end">
              <div
                onClick={() => {
                  window.open(`whatsapp://send?phone=${number}`, "_blank");
                }}
                className="button bg-buttonPrimary p-2 rounded-full  flex justify-end w-[30%]"
              >
                <div className="about-icon h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-sm sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-center">
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
        </div>
      </div>
    </div>
  );
}

export default PriceListComp;
