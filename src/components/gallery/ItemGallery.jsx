import { useState, memo, useContext } from "react";
import Masonry from "react-masonry-css";
import dataPhoto from "../../data/photoData";
import dataVideo from "../../data/videoData";
import VideoItem from "./VideoItem";
import Footer from "../footer/Footer";
import "./gallery.css";
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
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Main Content */}
        <div className="pt-20 sm:pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {isID ? "Galeri" : "Gallery"}
              </h1>
              <p className="text-gray text-sm sm:text-base">
                {isID
                  ? "Lihat hasil dokumentasi terbaik dari Lensakita"
                  : "View the best documentation results from Lensakita"}
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-xl p-1.5 gap-1">
                <button
                  onClick={() => setMenu("photos")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    menu === "photos"
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray hover:text-primary hover:bg-white/50"
                  }`}
                >
                  <ion-icon name="images-outline" style={{ fontSize: "1.1rem" }}></ion-icon>
                  {isID ? "Foto" : "Photos"}
                </button>
                <button
                  onClick={() => setMenu("videos")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    menu === "videos"
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray hover:text-primary hover:bg-white/50"
                  }`}
                >
                  <ion-icon name="videocam-outline" style={{ fontSize: "1.1rem" }}></ion-icon>
                  Video
                </button>
              </div>
            </div>

            {/* Photo Gallery */}
            {menu === "photos" && (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid flex -ml-4"
                columnClassName="my-masonry-grid_column pl-4"
              >
                {dataPhoto.map((img, i) => (
                  <div
                    key={i}
                    className="mb-4 group cursor-pointer"
                    onClick={() => setLightboxImage(img)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <img
                        src={img}
                        alt={`Gallery photo ${i + 1}`}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <ion-icon name="expand-outline" style={{ fontSize: "1.25rem" }}></ion-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            )}

            {/* Video Gallery */}
            {menu === "videos" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {dataVideo.map((item, i) => (
                  <VideoItem key={i} link={item.video} cover={item.cover} />
                ))}
              </div>
            )}

            {/* Empty state */}
            {menu === "photos" && dataPhoto.length === 0 && (
              <div className="text-center py-16 text-gray">
                <ion-icon name="images-outline" style={{ fontSize: "3rem" }}></ion-icon>
                <p className="mt-2">{isID ? "Belum ada foto" : "No photos yet"}</p>
              </div>
            )}
            {menu === "videos" && dataVideo.length === 0 && (
              <div className="text-center py-16 text-gray">
                <ion-icon name="videocam-outline" style={{ fontSize: "3rem" }}></ion-icon>
                <p className="mt-2">{isID ? "Belum ada video" : "No videos yet"}</p>
              </div>
            )}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <ion-icon name="close-outline" style={{ fontSize: "1.5rem" }}></ion-icon>
            </button>
            <img
              src={lightboxImage}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>

      {/* Footer for mobile */}
      <div className="lg:hidden">
        <Footer />
      </div>
    </>
  );
}

export default memo(ItemGallery);
