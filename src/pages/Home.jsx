import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import WhyUs from "../components/whyus/WhyUs";
import Contact from "../components/contact/Contact";
import Packs from "../components/packs/Packs";
import ServiceSlide from "../components/slider/ServiceSlide";

function Home({ isID, toggleLanguage }) {
  return (
    <>
      <Navbar isID={isID} toggleLanguage={toggleLanguage} />
      <Hero isID={isID} />
      <About isID={isID} />
      <WhyUs isID={isID} />
      {/* <Packs isID={isID} /> */}
      <ServiceSlide isID={isID} />
      <Contact isID={isID} />
    </>
  );
}

export default Home;
