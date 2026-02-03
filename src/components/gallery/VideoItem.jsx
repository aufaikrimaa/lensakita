import { memo } from "react";

function VideoItem({ cover, link }) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-200">
        <img
          src={cover}
          alt="Video thumbnail"
          crossOrigin="anonymous"
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-center justify-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
            <ion-icon
              name="logo-instagram"
              style={{ fontSize: "1.75rem", color: "#E1306C" }}
            ></ion-icon>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            <ion-icon name="play-outline" style={{ fontSize: "0.875rem" }}></ion-icon>
            Watch on Instagram
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(VideoItem);
