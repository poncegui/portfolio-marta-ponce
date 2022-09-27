import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurguerBtn from "./BurguerBtn";



const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>  
    
    <Hero>
    <h1>| Portfolio |  </h1>
  </Hero>
    
      <NavContainer id="menu-principal" >
    
    
            <h2>
            Home
            </h2>
        
     

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} 
          to="#aboutUs" >
            sobre mí
          </Link>
          <Link
            onClick={handleClick}
            to="/estudios"
       
          >
            formación
          </Link>
          <Link onClick={handleClick} 
          to="/experiencia" >
            experiencia 
          </Link>

          <a href="MARTA PONCE DE LEON_CV.pdf"
			download="MARTA PONCE DE LEON_CV.pdf">
        descargar cv
        </a>
   
          <Link onClick={handleClick} 
          to="/contacto" >
            contacto
          </Link>
        </div>
        <div className="burguer">
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  background-color: black;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 50;
  .containerPrincipal {
    display: flex;
    flex-direction: row;
  }
  .fa-angles-left {
    margin-left: 50px;
    font-size: 25px;
    color: white;

    @media (max-width: 768px) {
      margin-left: 40px;
    }
  }
  h2 {
    color: white;
    font-weight: 400;
    margin-left: 20px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1.5rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    text-align: center;
    transition: all 0.5s ease;
    a {
      text-transform: uppercase;
      color: white;
      font-size: 1.2rem;
      display: block;
    }
    @media (min-width: 1090px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.4rem;
        margin-left: 30px;
        color: white;
        display: inline;
        &:hover {
          transition: all 0.5s ease-out;
          text-decoration: underline;
        }
      }
      display: block;
    }

    @media (max-width: 768px) {
      h3{
        font-size: 24px;
        margin:0px;
        padding:0px;
      }
      a {
        font-size: 1rem;
        margin-top: 0.8rem;
        margin:0px;
        padding:0px;
        color: white;
        cursor: pointer;
        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.3s ease-out;
        }
    }
  }
  .links.active {
    @media (max-width: 1090px) {
      background-color: black;
      border-radius: 0 0 90% 0;
      height: 300px;
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 90px;
      left: 0;
      right: 0;
      text-align: center;
      a {
        font-size: 1.4rem;
        margin-top: 0.8rem;
        color: white;
        cursor: pointer;
        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.3s ease-out;
        }
      }
    }
    @media (max-width: 768px) {
      h3{
        font-size: 24px;
        margin:0px;
        padding:0px;
      }
      a {
        font-size: 1rem;
        margin-top: 0.8rem;
        margin:0px;
        padding:0px;
        color: white;
        cursor: pointer;
        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.3s ease-out;
        }
    }
  }

  .burguer {
    @media (min-width: 1090px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  color: white;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 80%;
  height: 80%;
  z-index: -1;
  transition: all 0.3s ease;
  &.active {
    background-color: black;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1090px) {
    display: none;
  }
`;

const Hero = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 20vh;
  text-transform: uppercase;
  width: 100%;
  z-index: 20;
  background-color: white;
  h1 {
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 70px;
  }

  span {
    color: white;
    font-size: 1.5rem
  }
  h1:first-letter {
    font-size: 150%;
  }


  @media (max-width: 768px) {
    min-height: 20vh;
    h1 {
   
      font-size: 3rem
    }
   h3 {
      color: white;
      font-size: 3rem;
      margin:0px;
    }
   
  }
`;
