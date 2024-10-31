import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/productSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  console.log(productState.page);

  useEffect(() => {
    dispatch(getAllProducts(productState.page));
  }, [dispatch,productState.page]);

  useEffect(() => {
    setProducts(productState.products.productData);
  }, [productState.products.productData]);
  console.log("products", products);

  if (productState.isloading === true) {
    return <h1>Loading ...</h1>;
  }

  if (productState.rejected === true) {
    return <h1>404</h1>;
  }

  return (
    <div className="flex-3  grid grid-cols-4 w-[80%] m-auto justify-center">
      {products &&
        products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
    </div>
  );
};

export default ProductList;
