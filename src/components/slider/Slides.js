import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "work in progress {react}",
    desc: "work in progress {react}",
    url: "https://poncegui.github.io/afymos-socuellamos/",
 
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "javaScript - finder movies",
    desc: "javaScript - finder movies",
    url: "https://poncegui.github.io/anime-movies-finder-js/",
  
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Html5/sass",
    desc: "Html5/sass",
    url: "https://poncegui.github.io/-practicing-with-sass/",

  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <a className="slide-link" href={slide.url} target="_blank">{slide.desc} </a>
    </div>
  </div>
));

export default slides;
