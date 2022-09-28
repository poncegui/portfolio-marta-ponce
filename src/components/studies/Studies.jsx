
import "./template.css";


import adalab from "../../img/adalab.JPG"
import politecnica from "../../img/politecnica.png"
import alcala from "../../img/alcala.JPG"
import NavBarInfo from "./NavBarInfo";


const Projects = () => {
 
  return (
    <>
      <NavBarInfo
   
    />


<div class="hero">
		<h1>Formación</h1>
	</div>
	<div class="container">
		<div class="evento">
			<div class="foto" data-aos="fade-up">
			<a href="https://adalab.es/" target="_blank" alt="adalab">
			
				<img src={adalab} alt="adalab"/>
				</a>
			</div>
			<h3 class="fecha">Bootcamp Web Developer, <br></br>nov 2021 - feb 2022 (600h)</h3>
     
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-down">
				<img src={politecnica} alt=""/>
			</div>
			<h3 class="fecha">Máster en Nuevas Técnologias de Construcción <br></br>     2013-2014</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-left">
				<img src={alcala} alt=""/>
			</div>
			<h3 class="fecha">Arquitectura ténica | Ingeniería de Edificación  <br></br>      2004-2010</h3>
		</div>

	</div>


    </>
  );
};

export default Projects;