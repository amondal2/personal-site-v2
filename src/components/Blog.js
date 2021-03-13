import React from 'react';

const Blog = ({ data }) => {
  const nodes = data.allMarkdownRemark.nodes;
  return (
    <div className="blogWrapper">
      <h2 id="blog">Publications & Blog</h2>
      <p>Links to my occasional, haphazard musings.</p>
      <ol>
        <div>
          <li>February 11, 2021 --- {'      '}
            <a href={"https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(21)00034-1/fulltext"} target="_blank" rel="noreferrer">
              {"The importance of community engagement on COVID-19 vaccination strategy"}
            </a>
            {' '}(Published in <a href="https://www.thelancet.com/journals/eclinm/" style={{ fontStyle: 'italic' }} target="_blank" rel="noreferrer">EClinicalMedicine</a>)
          </li>
        </div>
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
