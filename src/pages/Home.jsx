import { memo } from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import WhyUs from "../components/whyus/WhyUs";
import Contact from "../components/contact/Contact";
import Packs from "../components/packs/Packs";
import ServiceSlide from "../components/slider/ServiceSlide";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      {/* <Packs  /> */}
      <ServiceSlide />
      <Contact />
    </>
  );
}

export default memo(Home);
