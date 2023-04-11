import React from "react";
import Categories from "../components/Categories";
import FeaturedProduct from "../components/FeaturedProduct";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <FeaturedProduct />
      <Categories />
    </div>
  );
};

export default Home;
