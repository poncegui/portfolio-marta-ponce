import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurguerBtn from "./BurguerBtn";

const Navbar = props => {
  const [scrollSection, setScrollSection] = useState(0);

  const handleSection = () => {
    const position = window.pageYOffset;
    setScrollSection(position);
  };

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const toHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toSection = () => {
    window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("click", handleSection);
  }, [scrollSection]);

  return (
    <>
      <Hero>
        <h1>| Portfolio | </h1>
      </Hero>

      <NavContainer id="menu-principal" scrolling={props.scrolling}>
        <Link onClick={toHome} section={scrollSection}>
          <h2>| Home | </h2>
        </Link>

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link
            className={`links ${clicked ? "links" : ""}`}
            onClick={toSection}
            section={props.section}
          >
        | sobre mí |
          </Link>

          <Link onClick={handleClick} to="/formacion">
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

export default Navbar;

const NavContainer = styled.nav`
  height: 100px;
  width: 100%;
  z-index: 50;
  position:sticky;
  padding: 0px 30px;

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
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1.5rem;
    &:hover {
      text-decoration:line-through rgb(11, 235, 48);
      transition: all 0.3s ease-out;
     
    }
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
      &:hover {
        text-decoration:line-through rgb(11, 235, 48);
        transition: all 0.3s ease-out;

      }
    }
    @media (min-width: 1090px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.8rem;
        margin-left: 30px;
        color: white;
        display: inline;
      
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
      top: 10vh;
      left: 0;
      right: 0;
      text-align: start;
      a {
        font-size: 1.6rem;
        margin-top: 2rem;
        color: white;
        cursor: pointer;
        text-align:start;
        &:hover {
          
          transition: all 0.5s ease-out;
        }
      }
    }
    @media(max-width: 768px){
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
