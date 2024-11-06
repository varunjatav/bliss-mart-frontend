import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  cartActions,
  decrementCart,
  deleteCart,
  fetchCartData,
  postToCart,
} from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const localCartData = JSON.parse(localStorage.getItem("cartData"));
  const [persistData, setPersistData ] = useState(cartData || localCartData);

  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    dispatch(fetchCartData(userId));
    dispatch(cartActions.TotalPrice());
    // setPersistData(localCartData);
  }, [dispatch, userId]);
  console.log("cart data", cartData.cart);
  

  const handleDecrement = (productId) => {
    dispatch(decrementCart({ userId, productId })).then(() => {
      dispatch(fetchCartData(userId));
    });
  };
  const handleDelete = (productId) => {
    dispatch(deleteCart({ userId, productId })).then(() => {
      dispatch(fetchCartData(userId));
    });
  };

  const handleIncrement = (productId) => {
    dispatch(postToCart({ _id: productId, userId })).then(() => {
      dispatch(fetchCartData(userId));
    });
  };

  return (
    <section className="container bg-gray-300  p-24">
      <h1 className="font-bold text-lg">Shopping Cart</h1>
      <p>
        <span className="font-semibold text-md">
          {cartData.cartLength} item
        </span>{" "}
        in your cart.
      </p>
      <div className="flex justify-between gap-10 items-center pt-4">
        <div className="flex-2 w-[70%] bg-white p-5 rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.cartLength > 0 ? (
                cartData?.cart?.items?.map((cartItem, i) => {
                  return (
                    <tr key={cartItem._id} className="py-2">
                      <td>
                        <img
                          src={cartItem.product.product_image}
                          alt={cartItem.product.product_name}
                          loading="lazy"
                          className="w-20 m-auto h-24"
                        />
                      </td>
                      <td className="text-center font-bold">
                        &#x20b9;{" "}
                        {Math.round(
                          cartItem.product.product_price -
                            (cartItem.product.product_price *
                              cartItem.product.product_discount) /
                              100
                        )}
                      </td>
                      <td className="text-center">
                        <button
                          className="bg-red-500 px-2 rounded-md text-white"
                          onClick={() => handleDecrement(cartItem.product._id)}
                        >
                          <RemoveIcon />
                        </button>
                        <span className="px-2 text-lg font-bold">
                          {cartItem.quantity}
                        </span>
                        <button
                          className="bg-green-500 px-2 rounded-md text-white"
                          onClick={() => handleIncrement(cartItem.product._id)}
                        >
                          <AddIcon />
                        </button>
                      </td>
                      <td className="text-center font-bold">
                        &#x20b9;{" "}
                        {Math.round(
                          cartItem.product.product_price -
                            (cartItem.product.product_price *
                              cartItem.product.product_discount) /
                              100
                        ) * cartItem.quantity}
                      </td>
                      <td className="text-center  ">
                        <button
                          className="bg-red-500 items-center p-2 rounded-md text-white"
                          onClick={() => handleDelete(cartItem.product._id)}
                        >
                          <DeleteForeverIcon />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center font-bold text-xl py-10"
                  >
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex-1 w-[20%] bg-white p-5 rounded-lg">
          <div className="pb-4">
            <h2>
              {" "}
              <span className="font-bold text-md "> Total Price: </span>{" "}
              &#x20b9; {cartData.totalAmount}
            </h2>
            <h2>
              {" "}
              <span className="font-bold text-md "> Total Discount: </span> -
              &#x20b9; {Math.round(cartData.totalDiscount)}
            </h2>
          </div>

          <hr className="text-gray-500" />
          <div className="pt-4">
            <h2>
              {" "}
              <span className="font-bold text-md ">
                {" "}
                Overall:{" "}
              </span> &#x20b9; {Math.round(cartData.totalAmount - cartData.totalDiscount)}
            </h2>
            <div className="py-4">
              <Link to={'/checkout'} className="bg-green-500 px-5 py-2 rounded-lg text-white font-bold">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
