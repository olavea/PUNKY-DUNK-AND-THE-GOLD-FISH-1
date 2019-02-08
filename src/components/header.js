import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import gatsbyLogo from "../images/2_kopi.jpg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img
            style={{
              width: "300px"
            }}
            src={gatsbyLogo}
            alt="Gatsby Logo"
          />
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
