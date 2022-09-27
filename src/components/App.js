import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cover from "./cover/Cover";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Slider from "./slider/Slider";
import Studies from "./studies/Studies";
import Info from "./info/Info";
import Footer from "./footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <Routes>
  
        {/* <Route 
                    path='*' element={<NotFoundPage />} 
                    /> */}

        <Route path="/estudios" element={<Studies />} />

  
        {/* <Route path="/contacto" element={<Projects />} /> */}

   

        {/* <Route path="/colaboradores" element={<Partners />} /> */}

        <Route path="/colaboradores" element={<Slider />} />

        <Route
          path="/"
          element={
            <>
              <Navbar isScrolling={scrollHeight} />

              <Cover />
              <About />
              <Slider />
              <Info />

              <Footer />
            </>
          }
        />

      </Routes>
    </>
  );
}

export default App;
