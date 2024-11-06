import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import blissMartStore from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Checkout from "./pages/Checkout.jsx";
import Success from "./pages/Success.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product-list",
        element: <AllProducts />,
      },
      {
        path: "single-product/:productId",
        element: <ProductDetails />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path:"login",
        element: <Login />,
      },
      {
        path:"signup",
        element: <SignUp/>
      },
      {
        path:'checkout',
        element: <Checkout/>
      },
      {
        path:"success",
        element: <Success/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={blissMartStore}>
    <RouterProvider router={router} />
  </Provider>
);
