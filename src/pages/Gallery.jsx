import { memo } from "react";
import ItemGallery from "../components/gallery/ItemGallery";
import Navbar from "../components/navbar/Navbar";

function Gallery() {
  return (
    <>
      <Navbar />
      <ItemGallery />
    </>
  );
}

export default memo(Gallery);
