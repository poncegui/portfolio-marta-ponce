import React from "react";
import "./Footer.css";
import github from "../../img/square-github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>CONTACTO</h1>
      </div>
      <div className="footer-contact">
        <a
          className="mail"
          href="mailto:marta.ponceg@gmail.com"
          target="_blank"
          title="e-mail Marta Ponce de León"
        >
          marta.ponceg@gmail.com
        </a>
        <a
          className="tel"
          href="tel:+34722177717"
          target="_blank"
          title="teléfono Marta Ponce de León"
        >
          722 177 717
        </a>
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/marta-pg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/poncegui"
            target="_blank"
            rel="noreferrer"
          >
       
       <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
