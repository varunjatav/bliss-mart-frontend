import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleProduct } from "../store/productSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetails = () => {
  const { productId } = useParams();
//   const [product_details , setProduct_details] = useState({});

  const dispatch = useDispatch();

  const singleProductState = useSelector((state) => state.products.singleProduct);

 
  console.log("single product",singleProductState);



  useEffect(() => {
    dispatch(getsingleProduct(productId));
    // setProduct_details(singleProduct);
    
  }, [productId]);
// console.log("product details", product_details)

  return (
    <section className="pt-24 flex flex-cols-3 h-[100vh] px-5">
      {
        singleProductState?.map((product ,i) => {
            return (
                <>
                <div className="flex-1 flex flex-row" key={i}>
                <div className="flex flex-1 w-[20%] flex-col gap-2">
                  <img
                    src="https://m.media-amazon.com/images/I/712fWYf5PpL._SY879_.jpg"
                    alt="saree"
                    loading="lazy"
                    className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  />
                  <img
                    src="https://m.media-amazon.com/images/I/71q9rOA23fL._SY741_.jpg"
                    alt="saree"
                    loading="lazy"
                    className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  />
                  <img
                    src="https://m.media-amazon.com/images/I/71z6peC37iL._SY741_.jpg"
                    alt="saree"
                    loading="lazy"
                    className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  />
                  <img
                    src="https://m.media-amazon.com/images/I/61vk2l2upeL._SX679_.jpg"
                    alt="saree"
                    loading="lazy"
                    className="w-20 h-24 cursor-pointer border-2 border-black rounded-md"
                  />
                </div>
                <div className="flex-2 w-[80%]">
                  <img
                    src={product.product_image}
                    className="h-[100%] w-full"
                    alt={product.product_name}
                    loading="lazy"
                  />
                </div>
              </div>
        
              <div className="flex-1 px-5">
                <h1 className="font-bold text-xl">{product.product_name}</h1>
                <h2 className="font-semibold text-lg text-gray-700">{product.product_brand}</h2>
                <span className="text-2xl font-normal text-red-600">-{product.product_discount} %</span>{" "}
                <span className="text-xl font-semibold pl-5">&#x20b9; {Math.round(product.product_price - (product.product_price * (product.product_discount/100)))}</span>
                <p className="text-xs text-gray-500 line-through">MRP: &#x20b9; {product.product_price}</p>
                <p className="text-xs text-gray-700">
                 {product.product_details}
                </p>
                <p className="text-md text-gray-700">
                    {product.product_category}
                </p>
                <p className="text-md text-gray-700">
                    {product.gender === 'male' ? 'Gents': 'Ladies'}
                </p>
                <button className="mt-5 bg-yellow-500 py-2 px-3 rounded-3xl text-white"> <AddShoppingCartIcon/> Add To Cart</button>
              </div>
              </>
            )
        })
      }
 
     
    </section>
  );
};

export default ProductDetails;
