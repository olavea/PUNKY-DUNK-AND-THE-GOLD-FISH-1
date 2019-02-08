import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import "./layout.css";
import Archive from "./archive";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }

        file(relativePath: { regex: "/fig5/" }) {
          childImageSharp {
            fluid(maxWidth: 10000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Img fluid={data.file.childImageSharp.fluid} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby </a>
            and with open source content from the Gutenberg project read more in{" "}
            <Link to="/about/">about</Link>.
          </footer>
        </div>
        <Archive />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

// no helmet for you on line 23 and no meta on line 26
