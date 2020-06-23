import React from 'react';

const Blog = ({ data }) => {
  const nodes = data.allMarkdownRemark.nodes;
  return (
    <div className="blogWrapper">
      <h2 id="blog">Blog</h2>
      <p>Links to my occasional, haphazard musings.</p>
      <ol>
        {nodes.map(node => {
          const { title, slug, date } = node.frontmatter;
          return (
            <div>
              <li key={title}>
                {date} --- {'      '}
                <a href={slug} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Blog;
