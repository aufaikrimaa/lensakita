import { memo, useContext } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageContext } from "../../App";
import "./whyus.css";

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const { isID } = useContext(LanguageContext);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part3",
        start: "50% 50%",
        end: "200% 50%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(".content1", { marginTop: "-50%", opacity: 1 }, "sct1");
    tl.to(".circle", { rotate: "180deg" }, "sct1");
    tl.to(".content2", { opacity: 1 }, "sct2");
    tl.to(".content1", { marginTop: "-100%", opacity: 0 }, "sct2");
    tl.to(".circle", { rotate: "360deg" }, "sct2");
    tl.to(".content3", { opacity: 1 }, "sct3");
    tl.to(".content2", { opacity: 0 }, "sct3");
    tl.to(".content1", { marginTop: "-145%" }, "sct3");
    tl.to(".circle", { rotate: "540deg" }, "sct3");
    tl.to(".content4", { opacity: 1 }, "sct4");
    tl.to(".content3", { opacity: 0 }, "sct4");
    tl.to(".content1", { marginTop: "-190%" }, "sct4");
    tl.to(".circle", { rotate: "720deg" }, "sct4");
    tl.to(".content4", { opacity: 0 }, "sct5");
    tl.to(".content1", { marginTop: "-230%" }, "sct5");
    tl.to(".circle", { rotate: "900deg" }, "sct5");
  });

  const dataWhyUs = [
    {
      class: "content1",
      title: isID ? "Kualitas" : "Quality",
      desc: isID
        ? "Menggunakan peralatan fotografi dan videografi terkini, kami memastikan bahwa setiap momen yang kami dokumentasikan memiliki resolusi tinggi, detail tajam, dan pencahayaan optimal."
        : "Using the latest photography and videography equipment, we ensure that every moment we document has high resolution, sharp details, and optimal lighting.",
    },
    {
      class: "content2",
      title: isID ? "Kinerja" : "Performance",
      desc: isID
        ? "Tim kami mampu beradaptasi dengan cepat terhadap perubahan situasi di lapangan, menjaga komunikasi yang baik dengan klien, dan bekerja sama untuk mencapai hasil yang diinginkan tepat waktu. Dedikasi kami untuk memberikan layanan terbaik memastikan bahwa setiap proyek berjalan lancar dari awal hingga akhir."
        : "Our team is capable of quickly adapting to changing situations in the field, maintaining good communication with clients, and working together to achieve desired results on time. Our dedication to providing the best service ensures that every project runs smoothly from start to finish.",
    },
    {
      class: "content3",
      title: isID ? "Harga" : "Pricing",
      desc: isID
        ? "Lensakita menawarkan harga yang kompetitif tanpa mengorbankan kualitas. Kami menyediakan berbagai paket dokumentasi yang dapat disesuaikan dengan kebutuhan dan anggaran Anda. "
        : "Lensakita offers competitive pricing without compromising quality. We provide various documentation packages that can be tailored to your needs and budget.",
    },
    {
      class: "content4",
      title: isID ? "Kepercayaan" : "Trust",
      desc: isID
        ? "Kepercayaan adalah fondasi dari hubungan kami dengan klien. Kami berkomitmen untuk menjaga kerahasiaan dan privasi setiap momen yang kami dokumentasikan. Dari acara pribadi hingga proyek korporat, Anda dapat mengandalkan profesionalisme dan integritas kami."
        : "Trust is the foundation of our relationship with clients. We are committed to maintaining the confidentiality and privacy of every moment we document. From private events to corporate projects, you can rely on our professionalism and integrity.",
    },
  ];

  return (
    <div className="part3 w-full h-[100vh] bg-secondary px-[5vw] sm:px-[2.5vw] relative flex flex-col pt-[4vw] sm:mt-0 sm:flex sm:flex-row sm:justify-between overflow-hidden sm:overflow-hidden">
      <div className="leftDiv sm:w-1/2 sm:h-[100%] py-[24vw] sm:py-0 flex flex-col gap-[6vw] sm:gap-0 sm:justify-center">
        <div className="flex gap-[2vw] sm:gap-0 sm:flex-col">
          <div className="text-[9vw] sm:text-[5rem] tracking-tighter leading-[3rem] sm:leading-[6rem]">
            <h2 className="text-gray">
              {isID ? "Kenapa LensaKita?" : "Why LensaKita?"}
            </h2>
          </div>
        </div>
        <div className="outerCircle mt-[2vw] w-[14vw] h-[14vw] sm:w-[6.5vw]  sm:h-[6.5vw] bg-buttonPrimary rounded-full flex items-center justify-center">
          <div className="circle text-white w-[2rem] sm:w-[4rem]">
            <ion-icon name="medical-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-3/5 sm:h-[200%]  rghtDiv flex flex-col gap-[18vw] sm:gap-[7vw] mt-[24vw] sm:mt-[50%]">
        {dataWhyUs.map((item, i) => (
          <div
            key={i}
            className={`${item.class} flex flex-col gap-[4vw] sm:gap-[2vw] opacity-0 `}
          >
            <h4 className="text-[7vw] sm:text-[2vw] tracking-tighter text-textTitle">
              {item.title}
            </h4>
            <p className="text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(WhyUs);
