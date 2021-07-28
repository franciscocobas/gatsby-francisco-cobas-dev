import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

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

const BlogPostTemplate = ({
  data: { markdownRemark: post },
}: BlogPostTemplateTypes) => {
  return (
    <StyledBlogPostTemplateContainer>
      <SEO
        title={`${post.frontmatter.title} | Francisco Cobas Dev`}
        description={post.frontmatter.description}
        article
      />
      <div className='desktop-container'>
        <header>
          <img src={FCLogo} alt='Logo de Francisco Cobas Dev' />
          <p>
            <span className='italic'>b</span>log
          </p>
        </header>
        <article>
          <h1 className='blog-entry-title'>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
