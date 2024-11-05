import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleProduct, productActions } from "../store/productSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartActions, postToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProductState = useSelector(
    (state) => state.products.singleProduct
  );
  const selectImage = useSelector((state) => state.products.selectImg);
  const userId = localStorage.getItem("userId");
  console.log("user id: ",userId);
  

  useEffect(() => {
    dispatch(getsingleProduct(productId));
  }, [productId]);
  const handleSelectImage = (image) => {
    dispatch(productActions.setselectImg(image));
  };
  const addToCart = (productId) => {
    console.log(productId);

    dispatch(postToCart({_id:productId,userId}));
  };

  return (
    <section className="pt-24 flex flex-col md:flex-row md:h-[100vh] px-5">
      {singleProductState?.map((product, i) => {  
        return (
          <>
            <div className="flex-1 flex flex-col sm:flex-row" key={product._id}>
              <div className="flex flex-1 w-[20%] flex-row mb-4 sm:mb-0 sm:flex-col gap-2">
                <img
                  src={product?.images?.img_url1}
                  alt="saree"
                  loading="lazy"
                  className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  onClick={() => handleSelectImage(product?.images?.img_url1)}
                />
                <img
                  src={product?.images?.img_url2}
                  alt="saree"
                  loading="lazy"
                  className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  onClick={() => handleSelectImage(product?.images?.img_url2)}
                />
                <img
                  src={product?.images?.img_url3}
                  alt="saree"
                  loading="lazy"
                  className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  onClick={() => handleSelectImage(product?.images?.img_url3)}
                />
                <img
                  src={product?.images?.img_url4}
                  alt="saree"
                  loading="lazy"
                  className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  onClick={() => handleSelectImage(product?.images?.img_url4)}
                />
              </div>
              <div className="flex-2 w-[80%] mb-4 sm:mb-0">
                <img
                  src={selectImage === "" ? product.product_image : selectImage}
                  className="h-[100%] w-full"
                  alt={product.product_name}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 px-5">
              <h1 className="font-bold text-xl">{product.product_name}</h1>
              <h2 className="font-semibold text-lg text-gray-700">
                {product.product_brand}
              </h2>
              <span className="text-2xl font-normal text-red-600">
                -{product.product_discount} %
              </span>{" "}
              <span className="text-xl font-semibold pl-5">
                &#x20b9;{" "}
                {Math.round(
                  product.product_price -
                    product.product_price * (product.product_discount / 100)
                )}
              </span>
              <p className="text-xs text-gray-500 line-through">
                MRP: &#x20b9; {product.product_price}
              </p>
              <p className="text-xs text-gray-700">{product.product_details}</p>
              <p className="text-md text-gray-700">
                {product.product_category}
              </p>
              <p className="text-md text-gray-700">
                {product.gender === "male" ? "Gents" : "Ladies"}
              </p>
              <button
                className="mt-5 bg-yellow-500 py-2 px-3 rounded-3xl text-white"
                onClick={() => addToCart(product._id)}
              >
                {" "}
                <AddShoppingCartIcon /> Add To Cart
              </button>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default ProductDetails;
