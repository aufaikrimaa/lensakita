import { memo } from "react";

function VideoItem({ cover, link }) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <img
          src={cover}
          alt="Video thumbnail"
          crossOrigin="anonymous"
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <ion-icon
              name="logo-instagram"
              style={{ fontSize: "1.5rem", color: "#E1306C" }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(VideoItem);
