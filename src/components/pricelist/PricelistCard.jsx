import { memo } from "react";
import { Link } from "react-router-dom";

function PriceListCard({ photo, title, pack, price, id }) {
  return (
    <Link to={`/pack/${id}`} className="group block">
      <div className="card">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={photo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-1 mb-1">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-slate-500">{pack}</span>
            <span className="text-sm sm:text-base font-bold text-brand-600">
              {price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(PriceListCard);
