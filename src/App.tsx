import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/hero/hero";
import AboutUssection from "./components/sections/about.section";
import OurServicesSection from "./components/sections/ourServices.section";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <HeroSection />
      <AboutUssection />
      <OurServicesSection />
    </div>
  );
}

export default App;
