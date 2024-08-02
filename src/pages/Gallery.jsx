import { memo } from "react";
import ItemGallery from "../components/gallery/ItemGallery";
import Navbar from "../components/navbar/Navbar";

function Gallery({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <ItemGallery isID={isID} />
    </>
  );
}

export default memo(Gallery);
