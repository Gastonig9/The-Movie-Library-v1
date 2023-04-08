import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faDev } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="description">
        <h2>Developed by gastoniglesiasdev.com</h2>
      </div>
      <div className="social">
        <Link to="https://www.linkedin.com/in/gast%C3%B3n-iglesias-847221213/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to="https://github.com/Gastonig9" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link to="https://www.instagram.com/gastonlsk09/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="https://gastoniglesiasdev.000webhostapp.com/" target="_blank">
          <FontAwesomeIcon icon={faDev} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
