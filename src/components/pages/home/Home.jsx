import React from "react";
import FeaturedCom from "./FeaturedCom";
import HeroCom from "./HeroCom";
import CarouselCom from "./CarouselCom";
import CatCom from "./CatCom";
import DiscoverCom from "./DiscoverCom";
import AboutUs from "./AboutUs";
import InstructorsCom from "./InstructorsCom";
import BlogCom from "./BlogCom";

const Home = () => {
  return (
    <>
      <HeroCom />
      <CarouselCom />
      <DiscoverCom />
      <FeaturedCom />
      <CatCom />
      <AboutUs />
      <InstructorsCom />
      <BlogCom />
    </>
  );
};

export default Home;
