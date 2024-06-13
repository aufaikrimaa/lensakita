import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";

function Home({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <Hero isID={isID} />
      <About isID={isID} />
    </>
  );
}

export default Home;
