import { memo, useContext } from "react";
import { LanguageContext } from "../../App";
import { number } from "../../data/contactData";

const steps = [
  {
    step: 1,
    icon: "search-outline",
    labelId: "Jelajahi paket dokumentasi yang tersedia",
    labelEn: "Browse available documentation packages",
  },
  {
    step: 2,
    icon: "checkmark-circle-outline",
    labelId: "Pilih paket yang sesuai kebutuhanmu",
    labelEn: "Select a package that suits your needs",
  },
  {
    step: 3,
    icon: "create-outline",
    labelId: "Isi formulir pemesanan dengan lengkap",
    labelEn: "Fill out the booking form completely",
  },
  {
    step: 4,
    icon: "chatbubbles-outline",
    labelId: "Diskusikan detail via WhatsApp",
    labelEn: "Discuss details via WhatsApp",
  },
];

function HowToBook() {
  const { isID } = useContext(LanguageContext);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
          <ion-icon name="book-outline" style={{ fontSize: "1.25rem", color: "#16a34a" }}></ion-icon>
        </div>
        <div>
          <h3 className="font-bold text-slate-900">
            {isID ? "Cara Pemesanan" : "How to Book"}
          </h3>
          <p className="text-xs text-slate-500">
            {isID ? "4 langkah mudah" : "4 easy steps"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                <ion-icon name={item.icon} style={{ fontSize: "1rem" }}></ion-icon>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-full bg-slate-200 my-1" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <span className="text-xs font-medium text-brand-600 mb-0.5 block">
                {isID ? `Langkah ${item.step}` : `Step ${item.step}`}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isID ? item.labelId : item.labelEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.open(`https://wa.me/${number}`, "_blank")}
        className="w-full mt-4 btn-primary"
      >
        <ion-icon name="logo-whatsapp" style={{ fontSize: "1.25rem" }}></ion-icon>
        {isID ? "Hubungi Kami" : "Contact Us"}
      </button>
    </div>
  );
}

export default memo(HowToBook);
