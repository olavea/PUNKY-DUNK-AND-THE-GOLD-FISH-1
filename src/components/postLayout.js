import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "./layout";

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

// import React, { Component } from 'react'
// import { graphql } from 'gatsby';
// import Layout from './layout';

// // Static Query
// // Used anywhere, doesn't accept variable, can't use context

// // Page Query
// // Must be used on pages

// export default class postLayout extends Component {
//   render() {
//     const
//     return (
//       <Layout>
//         <h1>{sitePage.path}</h1>
//       </Layout>
//     )
//   }
// }

// export const query = graphql`
//   query PageQuery {
//     allSitePage {
//       edges {
//         node {
//           path
//         }
//       }
//     }
//     sitePage {
//       path
//     }
//   }
// `;
// --- from Kyle
// <li>
//             {previous && (
//               <Link to={previous.frontmatter.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.frontmatter.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
