import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [isID, setIsID] = useState(true);
  const toggleLanguage = () => {
    setIsID(!isID);
  };
  console.log(isID);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isID={isID} toggleLanguage={toggleLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
