import ComingSoon from "../components/ComingSoon";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

function PriceList({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <ComingSoon />
    </>
  );
}

export default PriceList;
