import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {

  return (
    <>
     <Navigation/>
     <Outlet/>
     <Footer/>
    </>
  );
}

export default App;
