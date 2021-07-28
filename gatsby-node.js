const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 100
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              public
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (process.env.NODE_ENV === 'production' && !node.frontmatter.public)
      return;
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    });
  });
};
