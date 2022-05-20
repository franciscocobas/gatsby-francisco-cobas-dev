import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        html: string;
        id: string;
        frontmatter: {
          date: Date;
          description: string;
          slug: string;
          public: boolean;
          title: string;
          image: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      }[];
    };
  };
}

function BlogPage({ data }: Props): JSX.Element {
  const [postImages, setPostImages] = React.useState<{ [id: string]: IGatsbyImageData }>({});

  React.useEffect(() => {
    setPostImages(
      data.allMarkdownRemark.nodes.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: getImage(curr.frontmatter.image.childImageSharp.gatsbyImageData),
        };
      }, {}),
    );
  }, [data.allMarkdownRemark.nodes]);

  return (
    <Box>
      <Box maxW="container.lg" mx="auto">
        <Heading as="h1">Blog</Heading>
        <Grid gridGap="8" gridTemplateColumns="1fr 1fr 1fr">
          {data.allMarkdownRemark.nodes.map((node) => (
            <GridItem key={node.id} border="1px solid" borderColor="gray.300">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <GatsbyImage alt="Post Image" image={postImages[node.id]} />
                <Text>{node.frontmatter.description}</Text>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BlogPage;

export const query = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit: 100) {
      nodes {
        html
        id
        frontmatter {
          date
          description
          slug
          public
          title

          image {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
`;
