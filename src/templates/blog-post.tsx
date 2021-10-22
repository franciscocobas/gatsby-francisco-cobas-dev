import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import FCLogo from '../images/fc-logo-negro.svg';

const StyledBlogPostTemplateContainer = styled.div`
  font-family: 'IBMPlex';
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-family: 'IBMPlexBold';
      font-size: 2rem;
    }
  }
  .desktop-container {
    max-width: 1100px;
    margin: 0 auto;
  }
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    .blog-entry-title {
      margin-right: 2rem;
    }
    p {
      line-height: 1.5;
      font-size: 20px;

      &:first-child {
        margin-top: 0;
      }
      &:first-child &::first-letter {
        initial-letter: 2;
      }
    }
    pre {
      font-family: 'NanumGothicCoding';
      background-color: #050505;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 5px;
      line-height: 1.4;
      max-width: 30rem;
      font-size: 0.9rem;
      overflow-x: auto;
      .function {
        color: #dad085;
      }
      .lightgray {
        color: #f8f8f259;
      }
    }
  }
`;

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
    <StyledBlogPostTemplateContainer>
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
    </StyledBlogPostTemplateContainer>
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
