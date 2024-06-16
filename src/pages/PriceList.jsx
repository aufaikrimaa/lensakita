import ComingSoon from "../components/ComingSoon";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import PriceListComp from "../components/pricelist/PriceListComp";

function PriceList({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <PriceListComp isID={isID} />
    </>
  );
}

export default PriceList;
