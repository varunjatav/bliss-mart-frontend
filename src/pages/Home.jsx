import React from "react";
import MainCarousel from "../components/HomeCarousel";
import ProductCarousel from "../components/ProductCarousel";
import ProductList from "../components/ProductList";
import Filteration from "../components/Filteration";

const Home = () => {
  return (
    <>
      <MainCarousel />
      {/* <ProductCarousel />
      <ProductCarousel /> */}
      <div className="flex flex-row w-[90%] m-auto"> 
        <Filteration/>
      <ProductList />
      </div>
     
    </>
  );
};

export default Home;
