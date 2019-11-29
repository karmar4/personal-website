import PropTypes from "prop-types";
import React from "react";

const Footer = ({ socials }) => (
  <footer
    style={{
      marginBottom: `1.45rem`,
      borderBottom: `1.45rem`,
      borderBottomColor: `black`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h2>Interested in learning more?</h2>
      <div>
        {socials.map(social => (
          <li
            key={social.name}
            style={{
              listStyleType: `none`,
              paddingLeft: `0.2rem`,
              paddingRight: `1rem`,
              display: "inline"
            }}
          >
            <a
              style={{ textDecoration: "none", color: `black` }}
              href={social.link}
            >
              {social.name}
            </a>
          </li>
        ))}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  socials: PropTypes.array
};

Footer.defaultProps = {
  socials: []
};

export default Footer;
