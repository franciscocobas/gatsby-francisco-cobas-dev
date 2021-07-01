module.exports = {
  siteMetadata: {
    title: 'Welcome',
    titleTemplate: '%s | Francisco Cobas Dev',
    description:
      "I'm a web developer working with Javascript and Typescript mainly focus on Front end technologies but also with a solid knowledge of all the web stuff",
    url: 'https://www.franciscocobas.dev',
    image: '/logos/foto-perfil.jpg',
    twitterUsername: '@MrRobotUy',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-gtag`,
      trackingIds: [
        'G-KMCW05M8K6', // Google Analytics / GA
      ],
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francisco Cobas Dev`,
        short_name: `Francisco Cobas`,
        start_url: `/`,
        background_color: `#050505`,
        theme_color: `#050505`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
};
