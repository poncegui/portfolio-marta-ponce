import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <Link className="Link" to="/experiencia-profesional">
          <h1 className="Link">Experiencia </h1>
        </Link>
        <h1>|</h1>
        <Link className="Link" to="/estudios">
          <h1 className="Link">Formación</h1>
        </Link>
      </div>
    </div>
  );
};

export default Info;
