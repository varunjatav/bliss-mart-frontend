import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
     <Navigation/>
     <ScrollToTop/>
     <Outlet/>
     <Footer/>
    </>
  );
}

export default App;
