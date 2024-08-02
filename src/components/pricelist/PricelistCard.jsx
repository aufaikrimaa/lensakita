import { memo } from "react";
import { Link } from "react-router-dom";

function PriceListCard({ photo, title, pack, price, id }) {
  return (
    <Link to={`/pack/${id}`}>
      <div className="w-full bg-white rounded-lg overflow-hidden hover:bg-lightGray cursor-pointer">
        <div className="h-40 xl:h-36 2xl:h-48">
          <img
            src={photo}
            className="w-full h-full object-cover rounded-lg"
            alt={title}
          />
        </div>

        <div className="py-2 text-[0.6rem] sm:text-xs 2xl:text-sm">
          <div className="flex justify-between">
            <div>{title}</div>
            <div className="font-bold sm:font-semibold">{pack}</div>
          </div>
          <div className="font-bold sm:font-semibold">{price}</div>
        </div>
      </div>
    </Link>
  );
}

export default memo(PriceListCard);
