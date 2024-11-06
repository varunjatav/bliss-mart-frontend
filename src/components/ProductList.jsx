import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/productSlice";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ErrorIcon from "@mui/icons-material/Error";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  // console.log(productState.page);

  useEffect(() => {
    dispatch(
      getAllProducts({
        page: productState.page,
        category: productState.category,
        price: productState.price,
      })
    );
  }, [dispatch, productState.page, productState.category, productState.price]);

  useEffect(() => {
    setProducts(productState.products.productData);
  }, [productState.products.productData]);
  console.log("products", products);

  if (productState.isloading === true) {
    return (
      <div className="text-center w-full">
        <HourglassTopIcon />
        <h1>Loading ..</h1>
      </div>
    );
  }

  if (productState.rejected === true) {
    return (
      <div className="text-center w-full">
        {" "}
        <ErrorIcon /> 
        <h1>404</h1>
      </div>
    );
  }
  if (products?.length === 0) {
    return (
      <div className="text-center w-full">
        <h1 className="text-center font-bold">
          Product Not Found!! please try different filter
        </h1>
      </div>
    );
  }

  return (
    <div className="flex-3 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-[80%] m-auto justify-center">
      {products &&
        products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
    </div>
  );
};

export default ProductList;
