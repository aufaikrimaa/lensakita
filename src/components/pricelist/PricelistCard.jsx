import { memo } from "react";
import { Link } from "react-router-dom";

function PriceListCard({ photo, title, pack, price, id }) {
  return (
    <Link to={`/pack/${id}`} className="group block">
      <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-500/25 transition-all duration-500">
        {/* Full Bleed Image */}
        <img
          src={photo}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          alt={title}
          loading="lazy"
        />
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top Row - Badges */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-start justify-between">
          {/* Pack Badge */}
          {pack && (
            <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-lg">
              {pack}
            </span>
          )}
          {!pack && <span />}
          
          {/* Price Badge */}
          <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-brand-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold shadow-xl shadow-brand-600/40 border border-brand-400/30">
            {price}
          </div>
        </div>
        
        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          {/* Title */}
          <h3 className="font-bold text-white text-sm sm:text-base leading-tight line-clamp-2 mb-2 sm:mb-3 drop-shadow-lg">
            {title}
          </h3>
          
          {/* Action Row */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-xs text-white/70 font-medium tracking-wide uppercase">
              View Details
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transform group-hover:translate-x-1 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-300">
              <ion-icon name="arrow-forward" style={{ fontSize: "0.75rem" }}></ion-icon>
            </div>
          </div>
        </div>
        
        {/* Corner Accent */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-brand-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
}

export default memo(PriceListCard);
