module.exports = {
  siteMetadata: {
    title: 'Francisco Cobas dev',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-6C9K5TKHDP',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
