import React from "react";
import MainCarousel from "../components/HomeCarousel";

import ProductList from "../components/ProductList";
import Filteration from "../components/Filteration";
import Pagination from "../components/Pagination";
import HomeCategory from "../components/HomeCategory";

const Home = () => {
  return (
    <div className="pt-14">
      <MainCarousel />
      {/* <div className="flex flex-row w-[90%] m-auto">
        <Filteration />
        <ProductList />
      </div> */}
      {/* <Pagination /> */}
     <HomeCategory/>
    </div>
  );
};

export default Home;
