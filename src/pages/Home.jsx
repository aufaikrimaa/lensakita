import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";

function Home({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <Hero isID={isID} />
    </>
  );
}

export default Home;
