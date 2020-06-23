import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import './blogTemplate.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/" className="return-home">
          Return to home page.
        </Link>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
