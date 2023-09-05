import React from "react";
import Banner from "./Banner";
import About from "./About";
import Experiences from "./Experiences";
import Services from "./Services";
import ChooseUs from "./ChooseUs";

const HomePageOverview = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experiences />
      <Services />
      <ChooseUs />
    </div>
  );
};

export default HomePageOverview;
