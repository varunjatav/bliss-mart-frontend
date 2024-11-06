import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, signupUser } from "../store/authSlice";

const SignUp = () => {
    const dispatch  = useDispatch();
    const signUpForm = useSelector((state) => state.auth);
    console.log(signUpForm.signup);
    
    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(signupUser(signUpForm.signup)).then(() => dispatch(authActions.resetSignUpForm()));
        alert("Sign up succeessfully!!")
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(authActions.setSignUpFrom({name,value}));
    };

  return (
    <section className="container py-24">
      <h1 className="font-bold text-2xl text-center">Please Sign Up</h1>
      <form className="p-5 w-[400px] m-auto" onSubmit={handleSignUp}>
        <div>
          <label htmlFor="mobileNumber" className="font-bold text-md">
            {" "}
            Your Mobile No.
          </label>{" "}
          <br />
          <input
            id="mobile"
            type="number"
            required
            placeholder="Enter your Mobile No. here"
            className="border-2 p-2 my-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            name="mobileNumber"
            value={signUpForm.signup.mobileNumber || ""}
          />
        </div>
        <div>
          <label htmlFor="firstName" className="font-bold text-md">
            {" "}
            Your First Name
          </label>{" "}
          <br />
          <input
            id="firstName"
            type="text"
            required
            placeholder="Enter your First Name here"
            className="border-2 p-2 my-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            name="firstName"
            value={signUpForm.signup.firstName || ""}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="font-bold text-md">
            {" "}
            Your Last Name
          </label>{" "}
          <br />
          <input
            id="lastName"
            type="text"
            required
            placeholder="Enter your Last Name here"
            className="border-2 p-2 my-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            name="lastName"
            value={signUpForm.signup.lastName || ""}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-bold text-md">
            {" "}
            Your Email
          </label>{" "}
          <br />
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your Email here"
            className="border-2 p-2 my-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            name="email"
            value={signUpForm.signup.email || ""}
          />
        </div>

        <div>
          <label htmlFor="password" className="font-bold text-md">
            {" "}
            Your Password
          </label>{" "}
          <br />
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your Password here"
            className="border-2 p-2 mt-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            name="password"
            value={signUpForm.signup.password || ""}
          />
        </div>
        <div className="py-4 flex items-center justify-center">
          <input
            type="submit"
            value="Sign Up"
            className="bg-blue-600 hover:bg-blue-500 p-3 text-white font-bold rounded-lg w-full cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
