import React from "react";
import MainCarousel from "../components/HomeCarousel";
import ProductCarousel from "../components/ProductCarousel";
import ProductList from "../components/ProductList";
import Filteration from "../components/Filteration";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <MainCarousel />
      {/* <ProductCarousel />
      <ProductCarousel /> */}
      <div className="flex flex-row w-[90%] m-auto">
        <Filteration />
        <ProductList />
      </div>
      <Pagination />
    </>
  );
};

export default Home;
