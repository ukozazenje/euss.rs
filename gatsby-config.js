module.exports = {
  siteMetadata: {
    title: `european`,
    description: `European projektovanje termotehničkih instalacija konsultantske usluge izvođenje i nadzor termotehničkih instalacija energetska efikasnost`,
    author: `european`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `european`,
        short_name: `european`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#ccc`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
