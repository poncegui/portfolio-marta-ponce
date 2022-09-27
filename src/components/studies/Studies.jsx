import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./template.css";


import NavBarTemplate from "../navbar/NavBarTemplate";
import Footer from "../footer/Footer";

import adalab from "../../img/logo-adalab.svg"
import politecnica from "../../img/politecnica.png"
import alcala from "../../img/alcala.png"


const Projects = () => {
 



  return (
    <>
      <NavBarTemplate
    title="programas"
    alt=""
    />


<div class="hero">
		<h1>Formación</h1>
	</div>
	<div class="container">
		<div class="evento">
			<div class="foto" data-aos="fade-up">
				<img src={adalab} alt="adalab"/>
			</div>
			<h3 class="fecha">Bootcamp Web Developer, noviembre 2021 - febrero 2022 (600h)</h3>
     
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-down">
				<img src={politecnica} alt=""/>
			</div>
			<h3 class="fecha">Máster en Nuevas Técnologias de Construccion      2013-2014</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-left">
				<img src={alcala} alt=""/>
			</div>
			<h3 class="fecha">Arquitectura ténica | Ingeniería de Edificación        2004-2010</h3>
		</div>

	</div>



    </>
  );
};

export default Projects;