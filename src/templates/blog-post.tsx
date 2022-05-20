import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
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
    <Box color="black">
      <SEO
        article
        description={post.frontmatter.description}
        title={`${post.frontmatter.title} | Francisco Cobas Dev`}
      />
      <Container maxW="container.xl">
        <Box as="header">
          <img alt="Logo de Francisco Cobas Dev" src={FCLogo} />
        </Box>
        <Container as="article" maxW="container.md">
          <Heading className="blog-entry-title">{post.frontmatter.title}</Heading>
          <Box dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Container>
    </Box>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;
