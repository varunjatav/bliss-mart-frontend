import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cartSlice";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("cartData");
    dispatch(cartActions.emptyCart())
    navigate('/success');
  }
  return (
    <section className=" bg-gray-300 py-24 px-2 md:px-10 lg:px-24">
        <div className="pb-5">
        <h1 className="font-bold text-lg">Check Out Page</h1>
        <p> <span className="font-semibold text-md">Total Amount :</span> &#x20b9; {Math.round(cartData.totalAmount - cartData.totalDiscount)}</p>
        </div>
     
      
        <div className="bg-white p-5 rounded-lg ">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between gap-5 items-center md:flex-row md:gap-10">
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="firstname" className="font-semibold">Your First Name :</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter Your First Name"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="lastname" className="font-semibold">Your Last Name :</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter Your Last Name"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
              </div>
            </div>



            <div className="flex flex-1 w-full flex-col gap-2 pt-3">
                <label htmlFor="address" className="font-semibold">Address :</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
            </div>

            <div className="flex flex-col justify-between gap-5 pt-3 items-center md:flex-row md:gap-10">
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="city" className="font-semibold">City :</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  className="border-2 border-blue-500 w-full p-2 rounded-md "
                  required
                />
              </div>
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="state" className="font-semibold">State :</label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter State"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 pt-3 items-center md:flex-row md:gap-10">
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="zip" className="font-semibold">Zip Code :</label>
                <input
                  type="number"
                  id="zip"
                  placeholder="Enter Zip Code"
                  className="border-2 border-blue-500 w-full p-2 rounded-md "
                  required
                />
              </div>
              <div className="flex flex-1 w-full flex-col gap-2">
                <label htmlFor="country" className="font-semibold">Country :</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Country"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="pt-5">
            <h1 className="font-bold text-lg ">Credit/Debit Card payment</h1>
            <div className="flex flex-col justify-between gap-5 pt-3 items-center md:flex-row md:gap-10">
                
              <div className="flex flex-2 w-full md:w-[70%] flex-col gap-2">
                <label htmlFor="cardholder_name" className="font-semibold">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardholder_name"
                  placeholder="Enter Cardholder Name"
                  className="border-2 border-blue-500 w-full p-2 rounded-md "
                  required
                />
              </div>
              <div className="flex flex-2 w-full md:w-[70%] flex-col gap-2">
                <label htmlFor="exp_date" className="font-semibold">Exp Date :</label>
                <input
                  type="date"
                  id="exp_date"
                  placeholder="Enter Country"
                  className="border-2 border-blue-500 w-full p-2 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 pt-3 items-center md:flex-row md:gap-10">
                
                <div className="flex flex-2 w-full md:w-[70%] flex-col gap-2">
                  <label htmlFor="card_number" className="font-semibold">Card Number:</label>
                  <input
                    type="number"
                    id="card_number"
                    placeholder="Enter Card Number"
                    className="border-2 border-blue-500 w-full p-2 rounded-md "
                    required
                    maxLength={12}
                  />
                </div>
                <div className="flex flex-2 w-full md:w-[70%] flex-col gap-2">
                  <label htmlFor="secuirty_code" className="font-semibold">Secuirity Code (CVV)</label>
                  <input
                    type="number"
                    id="secuirty_code"
                    placeholder="Enter Secuirity Code"
                    className="border-2 border-blue-500 w-full p-2 rounded-md"
                    required
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
            <div className="py-4">
              <input type="submit" value={'Pay'} className="bg-green-500 px-5 py-2 rounded-lg text-white font-bold" />
                
            </div>
          </form>
        </div>
        
      
    </section>
  );
};

export default Checkout;
