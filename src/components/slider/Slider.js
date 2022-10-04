import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";
import slides from "./Slides";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h3>Mis proyectos</h3>
      </div>

      <Carousel plugins={['arrows',"infinite"]}
      slides={slides}/>
       
        {/* slidesPerPage={3}
        
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }} */}
      
    </div>
  );
};

export default Slider;
