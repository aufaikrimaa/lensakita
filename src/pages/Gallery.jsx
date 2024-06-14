import ComingSoon from "../components/ComingSoon";
import Navbar from "../components/navbar/Navbar";

function Gallery({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <ComingSoon />
    </>
  );
}

export default Gallery;
