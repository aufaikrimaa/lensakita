import { number, ContactAndMedsocData } from "../../data/contactData";

function Footer({ isID }) {
  return (
    <div className="h-[20rem] px-[5vw] sm:px-[2.5vw] border-t-4 border-lightGray py-4 relative">
      <div className="flex justify-between h-full">
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
        <div className="self-center grid gap-y-4">
          <div>{isID ? "Kontak" : "Contact"}</div>
          <div>
            <div>{number}</div>
            <div>{number}</div>
            <div>lensakitap@gmail.com</div>
          </div>
        </div>
        <div className="self-center grid gap-y-4">
          <div>{isID ? "Layanan Kami" : "Our Services"}</div>
          <div>
            <div>{number}</div>
            <div>{number}</div>
            <div> @lensakitap@gmail.com</div>
          </div>
        </div>
        <div className="self-center grid gap-y-4">
          <div>Menu</div>
          <div>
            <div>{number}</div>
            <div>{number}</div>
            <div> @lensakitap@gmail.com</div>
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

export default Footer;
