import { memo } from "react";
import { Link } from "react-router-dom";

function PriceListCard({ photo, title, pack, price, id }) {
  return (
    <Link to={`/pack/${id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-buttonPrimary/30 hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={photo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="font-medium text-primary text-sm sm:text-base line-clamp-1 mb-1">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray">{pack}</span>
            <span className="text-sm sm:text-base font-semibold text-buttonPrimary">
              {price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default memo(PriceListCard);
