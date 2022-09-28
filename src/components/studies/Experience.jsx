
import "./template.css";

import NavBarInfo from "./NavBarInfo";

import sacyr from "../../img/sacyr.JPG"
import df from "../../img/df.JPG"
import isolux from "../../img/isolux.JPG"
import uground from "../../img/uground.JPG"

const Experience = () => {
 


  return (
    <>
        <NavBarInfo
   
   />

<div class="hero">
		<h1>Experiencia</h1>
	</div>
	<div class="container">
		<div class="evento">
			<div class="foto" data-aos="fade-up">
			<a href="https://www.uground.com/" target="_blank" alt="uground">
			
			<img src={uground} alt="uground"/>
			</a>
			
			</div>
			<h3 class="fecha">Web Developer | Migración de datos con JavaScript <br></br>febrero 2022 - julio 2022. </h3>
		</div>
				<div class="evento">
			<div class="foto" data-aos="fade-left">
			<img src={sacyr} alt="sacyr-fluor"/>
			</div>
			<h3 class="fecha">Ingeniera Estimaciones<br></br>  2019 - 2021</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-right">
				<img src={df} alt=" duro felguera"/>
			</div>
			<h3 class="fecha">Project Control<br></br>  2017 - 2019</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-up">
				<img src={isolux} alt="isolux corsan"/>
			</div>
			<h3 class="fecha">Project Control<br></br>  2014 - 2017</h3>
		</div>
	
	</div>
	
    </>
  );
};

export default Experience;