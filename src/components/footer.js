import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-links">
        <a href="https://github.com/karmar4">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/karmar-barrett-444kkk/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:karmar.barrett97@gmail.com?Subject=Lets%20Chat">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <div className="footer-copyright">
        Made with <FontAwesomeIcon icon={faHeart} /> by Karmar
      </div>
    </div>
  </footer>
);

export default Footer;
