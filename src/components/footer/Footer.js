import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>CONTACTO</h1>
      </div>
      <nav className="footer-contact">
        
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
          (+34) 722 177 717
        </a>
      </nav>
      <div className="footer-sns">
      
          <a
            href="https://www.linkedin.com/in/marta-pg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          
  
      </div>
    </footer>
  );
};

export default Footer;
