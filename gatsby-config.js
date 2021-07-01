module.exports = {
  siteMetadata: {
    title: 'Welcome',
    titleTemplate: '%s | Francisco Cobas Dev',
    description:
      "I'm a web developer working with Javascript and Typescript mainly focus on Front end technologies but also with a solid knowledge of all the web stuff",
    url: 'https://www.franciscocobas.dev',
    image: '/images/foto-perfil.jpg',
    twitterUsername: '@MrRobotUy',
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
