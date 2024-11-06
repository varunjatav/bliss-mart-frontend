import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <section className="container bg-gray-300 p-24">
        <div className="pb-5">
        <h1 className="font-bold text-lg">Check Out Page</h1>
        <p> <span className="font-semibold text-md">Total Amount :</span> &#x20b9; {Math.round(cartData.totalAmount - cartData.totalDiscount)}</p>
        </div>
     
      
        <div className="bg-white p-5 rounded-lg ">
          <form action="">
            <div className="flex justify-between gap-10 items-center">
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

            <div className="flex justify-between gap-10 items-center pt-3">
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

            <div className="flex justify-between gap-10 items-center pt-3">
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
            <div className="flex justify-between gap-10 items-center pt-2">
                
              <div className="flex flex-2 w-[70%] flex-col gap-2">
                <label htmlFor="cardholder_name" className="font-semibold">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardholder_name"
                  placeholder="Enter Cardholder Name"
                  className="border-2 border-blue-500 w-full p-2 rounded-md "
                  required
                />
              </div>
              <div className="flex flex-1 w-[30%] flex-col gap-2">
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

            <div className="flex justify-between gap-10 items-center pt-2">
                
                <div className="flex flex-2 w-[70%] flex-col gap-2">
                  <label htmlFor="card_number" className="font-semibold">Card Number:</label>
                  <input
                    type="number"
                    id="card_number"
                    placeholder="Enter Card Number"
                    className="border-2 border-blue-500 w-full p-2 rounded-md "
                    required
                  />
                </div>
                <div className="flex flex-1 w-[30%] flex-col gap-2">
                  <label htmlFor="secuirty_code" className="font-semibold">Secuirity Code (CVV)</label>
                  <input
                    type="number"
                    id="secuirty_code"
                    placeholder="Enter Secuirity Code"
                    className="border-2 border-blue-500 w-full p-2 rounded-md"
                    required
                    max={3}
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
