import { graphql } from 'gatsby';
import React from 'react';

import SEO from '../components/seo';
import FCLogo from '../images/fc-logo-negro.svg';

type BlogPostTemplateTypes = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
      };
      html: string;
    };
  };
};

const BlogPostTemplate = ({ data: { markdownRemark: post } }: BlogPostTemplateTypes) => {
  return (
    <div>
      <SEO
        article
        description={post.frontmatter.description}
        title={`${post.frontmatter.title} | Francisco Cobas Dev`}
      />
      <div className="desktop-container">
        <header>
          <img alt="Logo de Francisco Cobas Dev" src={FCLogo} />
          <p>
            <span className="italic">b</span>log
          </p>
        </header>
        <article>
          <h1 className="blog-entry-title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`;
