import React from "react";
import "./Slider.css";
import potter from "../../img/api-harry-potter.jpg";
import lorem from "../../img/lorem.jpg";
import anime from "../../img/anime.jpg";
import codeReact from "../../img/react.jpg";
import endopints from "../../img/node-react.jpg";

const slidesInfo = [
  {
    src:
      codeReact,
    alt: "work in progress {react}  website",
    desc: "work in progress {react}  website",
    url: "https://poncegui.github.io/afymos-socuellamos/",
 
  },
  {
    src:
      potter,
    alt: "React - consumiendo API",
    desc:  "React - consumiendo API",
    url: "https://poncegui.github.io/harry-potter-character-finder/#/",
  
  },
  {
    src:
      endopints,
    alt: "React - Node js, endpoints & login",
    desc:  "React - Node js, endpoints & login",
    url: "https://github.com/poncegui/endpoints-ddbb-login-netflix",
  
  },
  {
    src:
      anime,
    alt: "javaScript - set Local Storage",
    desc: "javaScript - set Local Storage",
    url: "https://poncegui.github.io/anime-movies-finder-js/",
  
  },
  {
    src:
      lorem,
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
