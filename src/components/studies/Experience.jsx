import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./template.css";


import NavBarTemplate from "../navbar/NavBarTemplate";
import Footer from "../footer/Footer";





const Experience = () => {
 



  return (
    <>
      <NavBarTemplate
    title="experiencia"
    alt=""
    />


<div class="hero">
		<h1>Experiencia</h1>
	</div>
	<div class="container">
		<div class="evento">
			<div class="foto" data-aos="fade-up">
			<img src="./img/5.jpg" alt=""/>
			</div>
			<h3 class="fecha">Web Developer | Migración de datos con JavaScript  |  febrero 2022 - julio 2022. </h3>
     
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-down">
			<img src="./img/5.jpg" alt=""/>
			</div>
			<h3 class="fecha">Responsable Control de Costes y Planificación | enero 2021 - septiembre 2022</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-left">
			<img src="./img/5.jpg" alt=""/>
			</div>
			<h3 class="fecha">Arquitectura ténica | Ingeniería de Edificación |2004-2010</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-right">
				<img src="./img/4.jpg" alt=""/>
			</div>
			<h3 class="fecha">18 de Agosto de 2023</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-up">
				<img src="./img/5.jpg" alt=""/>
			</div>
			<h3 class="fecha">26 de Noviembre de 2024</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-up">
				<img src="./img/6.jpg" alt=""/>
			</div>
			<h3 class="fecha">7 de Diciembre de 2021</h3>
		</div>
	</div>



    </>
  );
};

export default Experience;