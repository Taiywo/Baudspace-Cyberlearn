import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//importing react slick slider

import { animateScroll } from "react-scroll";
import Navbar from "../src/components/molecules/Navbar"
import Home from "./components/Home";
import Footer from "../src/components/molecules/Footer";

// import Footer from "./components/organs/Footer";



function App() {

  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full h-full  font-nunito relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App