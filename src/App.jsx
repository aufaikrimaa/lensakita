import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";
import Gallery from "./pages/Gallery";
import DetailPack from "./pages/DetailPack";

export const LanguageContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isID, setIsID] = useState(true);

  const toggleLanguage = () => {
    setIsID(!isID);
  };

  return (
    <ReactLenis root>
      <LanguageContext.Provider value={{ isID, toggleLanguage }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pack/:id" element={<DetailPack />} />
          </Routes>
        </BrowserRouter>
      </LanguageContext.Provider>
    </ReactLenis>
  );
}

export default App;
