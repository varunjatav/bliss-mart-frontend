import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, loginUser } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {isError, isLoggedIn, login, userRole} = useSelector(state => state.auth);
  console.log(isError, isLoggedIn, login, userRole);
  // const loginState = useSelector(state => state.auth.login)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    
    dispatch(authActions.setLoginForm({name, value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitting login:", loginState); // Log state before submission
    dispatch(loginUser(login)).then(() => dispatch(authActions.resetLoginForm()));
  }

  return (
    <section className="container py-24">
      <h1 className="font-bold text-2xl text-center">Login</h1>
      <form className="p-5 w-[400px] m-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="font-bold text-md">
            {" "}
            Your Email
          </label>{" "}
          <br />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email here"
            className="border-2 p-2 my-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            value={login.email}
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
            name="password"
            type="password"
            placeholder="Enter your Password here"
            className="border-2 p-2 mt-2 rounded-lg w-full hover:border-blue-500 active:border-blue-500"
            onChange={handleChange}
            value={login.password}
          />
        </div>
        <div className="py-4 flex items-center justify-center">
          <input
            type="submit"
            value="Login"
            className="bg-blue-600 hover:bg-blue-500 p-3 text-white font-bold rounded-lg w-full cursor-pointer"
          />
        </div>
      </form>
      {isError?.status === "fail" && <h1 className="text-center font-bold text-lg text-red-600">{isError.message} *</h1>}
    </section>
  );
};

export default Login;
