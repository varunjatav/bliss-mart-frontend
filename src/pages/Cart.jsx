import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  console.log("cart data from cart.jsx", cartData.cart);
  const userId = localStorage.getItem("userId");
console.log("user id from cart.jsx", userId);

  useEffect(() => {
    dispatch(fetchCartData(userId));
  }, [dispatch]);
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
              {cartData?.cart?.length > 0 ? (
                cartData?.cart?.map((cartItem, i) => (
                  <tr key={cartItem._id} className="py-2">
                    <td>
                      <img
                        src={cartItem.product_image}
                        alt={cartItem.product_name}
                        loading="lazy"
                        className="w-20 m-auto h-24"
                      />
                    </td>
                    <td className="text-center font-bold">
                      &#x20b9;{" "}
                      {Math.round(
                        cartItem.product_price -
                          (cartItem.product_price * cartItem.product_discount) /
                            100
                      )}
                    </td>
                    <td className="text-center">
                      <button className="bg-red-500 px-2 rounded-md text-white">
                        <RemoveIcon />
                      </button>
                      <span className="px-2 text-lg font-bold">1</span>
                      <button className="bg-green-500 px-2 rounded-md text-white">
                        <AddIcon />
                      </button>
                    </td>
                    <td className="text-center font-bold">
                      &#x20b9;{" "}
                      {Math.round(
                        cartItem.product_price -
                          (cartItem.product_price * cartItem.product_discount) /
                            100
                      ) * 1}
                    </td>
                    <td className="text-center  ">
                      <button className="bg-red-500 items-center p-2 rounded-md text-white">
                        <DeleteForeverIcon />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center font-bold text-xl py-10">
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
              &#x20b9;
            </h2>
            <h2>
              {" "}
              <span className="font-bold text-md "> Total Discount: </span>{" "}
            </h2>
          </div>

          <hr className="text-gray-500" />
          <div className="pt-4">
            <h2>
              {" "}
              <span className="font-bold text-md "> Overall: </span>{" "}
            </h2>
            <div className="py-4">
              <button className="bg-green-500 px-5 py-2 rounded-lg text-white font-bold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
