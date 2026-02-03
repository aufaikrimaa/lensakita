import { memo, useContext } from "react";
import { LanguageContext } from "../../App";
import { number } from "../../data/contactData";

const steps = [
  {
    icon: "globe-outline",
    labelId: "Kunjungi dan jelajahi website resmi Lensakita",
    labelEn: "Visit and explore the official Lensakita website",
  },
  {
    icon: "list-outline",
    labelId: "Pilih layanan dari menu price list atau acara lain sesuai kebutuhanmu",
    labelEn: "Choose a service from the price list menu or other events to suit your needs",
  },
  {
    icon: "create-outline",
    labelId: 'Klik tombol "Pesan" dan isi data untuk memesan layanan',
    labelEn: 'Click the "Order" button and fill out the form to book our service',
  },
  {
    icon: "chatbubbles-outline",
    labelId: "Konfirmasi pesananmu via WhatsApp dan tentukan metode pembayaran",
    labelEn: "Confirm your order via WhatsApp and finalize the payment method",
  },
  {
    icon: "camera-outline",
    labelId: "Saatnya mendokumentasikan momen berhargamu bersama kami!",
    labelEn: "It's time to document your precious moments with us!",
  },
];

function HowToBook() {
  const { isID } = useContext(LanguageContext);

  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-2">
        {isID ? "Cara Memesan" : "How to Book"}
      </h2>
      <p className="text-sm text-gray mb-6">
        {isID
          ? "Ikuti langkah mudah berikut untuk memesan layanan dokumentasi"
          : "Follow these easy steps to book our documentation service"}
      </p>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-buttonPrimary/10 rounded-full flex items-center justify-center text-buttonPrimary">
              <ion-icon name={step.icon} style={{ fontSize: "1rem" }}></ion-icon>
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm text-primary leading-relaxed">
                <span className="font-medium text-gray mr-1">{index + 1}.</span>
                {isID ? step.labelId : step.labelEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.open(`https://wa.me/${number}`, "_blank")}
        className="mt-6 w-full bg-buttonPrimary hover:bg-buttonPrimary/90 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        <ion-icon name="logo-whatsapp" style={{ fontSize: "1.25rem" }}></ion-icon>
        {isID ? "Pesan Sekarang" : "Book Now"}
      </button>
    </div>
  );
}

export default memo(HowToBook);
