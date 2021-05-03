import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Listings from "../components/Listings";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import { SliderDataOne } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderDataOne} />
      <InfoSection {...InfoDataOne} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
