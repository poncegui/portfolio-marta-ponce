import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurguerBtn from "../navbar/BurguerBtn";

const NavBarInfo = () => {
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
        <h1>| Portfolio | </h1>
      </Hero>

      <NavContainer id="menu-principal" handleBack={handleBack}>
        <Link handleBack={handleBack} to="/">
            
          <h2>| Volver | </h2>
        </Link>

        <div className={`links ${clicked ? "active" : ""}`}>
         
          <Link onClick={handleClick} to="/estudios">
          | formación | 
          </Link>
          <Link onClick={handleClick} to="/experiencia">
          | experiencia | 
          </Link>

          <a
            href="MARTA PONCE DE LEON_CV.pdf"
            download="MARTA PONCE DE LEON_CV.pdf"
          >
            | descargar cv | 
          </a>
        </div>
        <div className="burguer">
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default NavBarInfo;

const NavContainer = styled.nav`
  height: 100px;
  width: 100%;
  z-index: 50;
  position:sticky;

  top:0;
  h2 {
    color: white;
    font-weight: 400;
    margin-left: 20px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  //   background-color: #333;
  background-color: #000;
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
    all 400ms ease-out;
    a {
      color: white;
      font-size: 1.2rem;
      display: block;
    }
    @media (min-width: 1090px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.8rem;
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
  }
  .links.active {
    @media (max-width: 1090px) {
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      background-color: #000;
      border-radius: 0 0 0 0;
      height:50vh;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      top: 20vh;
      left: 0;
      right: 0;
      text-align: center;
      a {
        font-size: 1.6rem;
        margin-top: 2rem;
        color: white;
        cursor: pointer;
        text-align: center;
        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.5s ease-out;
        }
      }
    }
    @media(max-width: 768px){
        top: 10vh;
    }
  }
  .burguer {
    @media (min-width: 1090px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  // background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  margin-left: 30px;
  z-index: -1;
  transition: all 0.8s ease;
  overflow: visible;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
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
    font-size: 1.5rem;
  }
  h1:first-letter {
    font-size: 150%;
  }

  @media (max-width: 768px) {
    min-height: 20vh;
    h1 {
      font-size: 3rem;
    }
    h3 {
      color: white;
      font-size: 3rem;
      margin: 0px;
    }
  }
`;
