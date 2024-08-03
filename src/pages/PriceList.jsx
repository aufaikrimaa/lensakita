import { memo } from "react";
import Navbar from "../components/navbar/Navbar";
import PriceListComp from "../components/pricelist/PriceListComp";

function PriceList() {
  return (
    <>
      <Navbar />
      <PriceListComp />
    </>
  );
}

export default memo(PriceList);
