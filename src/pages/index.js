import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import two from "../images/2_kopi.jpg";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>PUNKY DUNK AND THE GOLD FISH</h1>
    <h2>
      THIS LITTLE STORY IS TOLD AND THE LITTLE PICTURES WERE DRAWN FOR A GOOD
      LITTLE CHILD NAMED
    </h2>

    <h2>----------------------</h2>
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
              width: "900px"
            }}
            src={two}
            alt="Gatsby Logo"
          />
        </Link>
      </h1>
    </div>
    <p>Published in the Shop of</p>
    <p>P.F.VOLLAND & CO.</p>
    <p>CHICAGO</p>

    <p>COPYRIGHT, 1912,</p>
    <p>P. F. VOLLAND & CO.,</p>
    <p>CHICAGO, U. S. A.</p>
    <p>ALL RIGHTS RESERVED</p>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/posts/first-post/">Go to page 1</Link>
  </Layout>
);

export default IndexPage;
