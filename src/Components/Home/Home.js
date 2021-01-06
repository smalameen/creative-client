import React from "react";
import Brands from "./Brands/Brands";
import Carousels from "./Carousel/Carousels";
import Clients from "./clients/Clients";
import Footer from "./Footer/Footer";
import HeaderAndHire from "./HeaderAndHire";
import "./Home.css";
import SkillUp from "./SkillUp/SkillUp";

const Home = () => {
  return (
    <div>
      
        <HeaderAndHire/>
        <Brands/>
        <SkillUp/>
        <Carousels/>
        <Clients/>
        <Footer/>
      
      
    </div>
  );
};

export default Home;
