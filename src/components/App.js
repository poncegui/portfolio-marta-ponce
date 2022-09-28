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
import Experience from "./studies/Experience";

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
        <Route path="/formacion" element={<Studies />} />
        <Route path="/experiencia" element={<Experience />} />

        <Route
          path="/"
          element={
            <>
              <Navbar scrolling={scrollHeight} />

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
