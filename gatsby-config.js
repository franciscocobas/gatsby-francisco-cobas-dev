module.exports = {
  siteMetadata: {
    title: 'Welcome',
    titleTemplate: '%s | Francisco Cobas Dev',
    description:
      "I'm a web developer working with Javascript and Typescript mainly focus on Front end technologies but also with a solid knowledge of all the web stuff",
    url: 'https://franciscocobas.dev',
    image: '/logos/foto-perfil.jpg',
    twitterUsername: '@MrRobotUy',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-KMCW05M8K6', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francisco Cobas Dev`,
        short_name: `Francisco Cobas`,
        start_url: `/`,
        background_color: `#050505`,
        theme_color: `#050505`,
        display: `standalone`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    '@chakra-ui/gatsby-plugin',
  ],
};
