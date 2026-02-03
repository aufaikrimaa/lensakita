import { useState, memo, useContext } from "react";
import Masonry from "react-masonry-css";
import dataPhoto from "../../data/photoData";
import dataVideo from "../../data/videoData";
import VideoItem from "./VideoItem";
import Footer from "../footer/Footer";
import { LanguageContext } from "../../App";

function ItemGallery() {
  const { isID } = useContext(LanguageContext);
  const [menu, setMenu] = useState("photos");
  const [lightboxImage, setLightboxImage] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    768: 2,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="container-main text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm font-medium mb-4">
            {isID ? "Portofolio Kami" : "Our Portfolio"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {isID ? "Galeri Karya" : "Gallery"}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {isID
              ? "Lihat hasil dokumentasi terbaik dari berbagai acara"
              : "View the best documentation results from various events"}
          </p>
        </div>
      </div>

      {/* Toggle Tabs */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="container-main">
          <div className="flex items-center justify-center gap-2 py-3">
            <button
              onClick={() => setMenu("photos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                menu === "photos"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <ion-icon name="images-outline" style={{ fontSize: "1.1rem" }}></ion-icon>
              {isID ? "Foto" : "Photos"}
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {dataPhoto.length}
              </span>
            </button>
            <button
              onClick={() => setMenu("videos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                menu === "videos"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <ion-icon name="videocam-outline" style={{ fontSize: "1.1rem" }}></ion-icon>
              Video
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {dataVideo.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container-main py-8 sm:py-12">
        {/* Photo Gallery */}
        {menu === "photos" && (
          <>
            {dataPhoto.length > 0 ? (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {dataPhoto.map((img, i) => (
                  <div
                    key={i}
                    className="mb-4 group cursor-pointer"
                    onClick={() => setLightboxImage(img)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-slate-200">
                      <img
                        src={img}
                        alt={`Gallery photo ${i + 1}`}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center gap-2 text-white">
                          <ion-icon name="expand-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
                          <span className="text-sm font-medium">
                            {isID ? "Lihat" : "View"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ion-icon name="images-outline" style={{ fontSize: "2rem", color: "#94a3b8" }}></ion-icon>
                </div>
                <p className="text-slate-500">{isID ? "Belum ada foto" : "No photos yet"}</p>
              </div>
            )}
          </>
        )}

        {/* Video Gallery */}
        {menu === "videos" && (
          <>
            {dataVideo.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {dataVideo.map((item, i) => (
                  <VideoItem key={i} link={item.video} cover={item.cover} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ion-icon name="videocam-outline" style={{ fontSize: "2rem", color: "#94a3b8" }}></ion-icon>
                </div>
                <p className="text-slate-500">{isID ? "Belum ada video" : "No videos yet"}</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ion-icon name="close-outline" style={{ fontSize: "1.5rem" }}></ion-icon>
          </button>
          <img
            src={lightboxImage}
            alt="Fullscreen view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default memo(ItemGallery);
