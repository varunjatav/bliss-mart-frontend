import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, productActions } from "../store/productSlice";

const Filteration = () => {
  const productState = useSelector(state => state.products);
  console.log(productState);
  
  const dispatch = useDispatch();

  const handleProductCategory = (category) => {
    dispatch(productActions.handleCategory(category));
  };
  return (
    <div className="flex-1 w-[20%] py-10 hidden md:block">
      <h1 className="font-bold">Category</h1>
      <div className="py-5 flex flex-col gap-5">
        <div>
          <input type="radio" name="category" id="all" onClick={() => handleProductCategory("all")} />
          <span className="pl-2">All</span>
        </div>
        <div>
          <input type="radio" name="category" id="t-shirts"  onClick={() => handleProductCategory("t-shirts")}/>
          <span className="pl-2">T-shirts</span>
        </div>

        <div>
          <input type="radio" name="category" id="jeans" onClick={() => handleProductCategory("jeans")}/>
          <span className="pl-2">Jeans</span>
        </div>
        <div>
          <input type="radio" name="category" id="shirts" onClick={() => handleProductCategory("shirts")}/>
          <span className="pl-2">Shirts</span>
        </div>
      </div>
    </div>
  );
};

export default Filteration;
