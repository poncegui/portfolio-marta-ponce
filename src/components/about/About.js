import React from "react";
import "./About.css";
import photo from "../../img/foto-portfolio.jpeg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre mí</h3>
        <p>
          Trabajé 11 años en ingeniería como Proyect Control. Atraída
          por la resolución de problemas y las metodologías ágiles, en 2021 decidí que
          la programación era el campo en el que quería desarrollar mi carrera
          profesional. Desde entonces, estoy estudiando y trabajando con mucha ilusión para convertirme en Front-end Developer.
        </p>
      </div>
      <div className="about-img">
        {/* <img
          src={photo}
          alt="foto perfil"
        /> */}
      </div>
    </div>
  );
};

export default About;
