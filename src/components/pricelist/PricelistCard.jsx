import { memo } from "react";
import { Link } from "react-router-dom";

function PriceListCard({ photo, title, pack, price, id }) {
  return (
    <Link to={`/pack/${id}`} className="group block">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/20 transition-all duration-500 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={photo}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            alt={title}
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
          
          {/* Pack Badge */}
          {pack && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-700 shadow-lg">
                {pack}
              </span>
            </div>
          )}
          
          {/* Price Tag - Floating */}
          <div className="absolute top-3 right-3">
            <div className="px-3 py-1.5 rounded-xl bg-brand-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-500/30">
              {price}
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white text-sm sm:text-base line-clamp-2 drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Bottom Action Bar */}
        <div className="relative px-4 py-3 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              View Details
            </span>
            <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white transform group-hover:translate-x-1 group-hover:bg-brand-600 transition-all duration-300 shadow-md shadow-brand-500/30">
              <ion-icon name="arrow-forward" style={{ fontSize: "0.875rem" }}></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(PriceListCard);
