import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";
import Gallery from "./pages/Gallery";

function App() {
  const [isID, setIsID] = useState(true);

  const toggleLanguage = () => {
    setIsID(!isID);
  };
  // console.log(isID);
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isID={isID} toggleLanguage={toggleLanguage} />}
          />
          <Route
            path="/pricelist"
            element={<PriceList isID={isID} toggleLanguage={toggleLanguage} />}
          />
          <Route
            path="/gallery"
            element={<Gallery isID={isID} toggleLanguage={toggleLanguage} />}
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
