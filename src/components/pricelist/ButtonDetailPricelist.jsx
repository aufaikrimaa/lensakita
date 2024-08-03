import { memo, useContext } from "react";
import { number } from "../../data/contactData";
import { LanguageContext } from "../../App";

function ButtonDetailPricelist({ handleOpen }) {
  const { isID } = useContext(LanguageContext);
  return (
    <div className="flex sm:justify-end justify-center sm:absolute bottom-0 w-full gap-2">
      <div
        className="button bg-buttonSecondary p-4 rounded-full cursor-pointer"
        onClick={handleOpen}
      >
        <div className="h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-gray text-center">
          <h2 className="mb-1 sm:mb-0">
            {isID ? " Pesan Sekarang!" : " Book now!"}
          </h2>
          <h2> {isID ? " Pesan Sekarang!" : " Book now!"}</h2>
        </div>
      </div>
      <div
        onClick={() => {
          window.open(`whatsapp://send?phone=${number}`, "_blank");
        }}
        className="button bg-buttonPrimary p-4 rounded-full cursor-pointer"
      >
        <div className="about-icon h-[1.2rem] sm:h-[1.5rem] leading-[4vw] overflow-hidden sm:text-[1.1rem] sm:leading-[1.4vw] w-[35vw] sm:w-[12vw] tracking-tight text-center">
          <h2 className="text-white mb-1 sm:mb-0">
            <ion-icon name="logo-whatsapp"></ion-icon>
            {isID ? " Diskusikan!" : " Let's Discuss!"}
          </h2>
          <h2 className="text-white">
            <ion-icon name="logo-whatsapp"></ion-icon>
            {isID ? " Diskusikan!" : " Let's Discuss!"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default memo(ButtonDetailPricelist);
