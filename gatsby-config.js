module.exports = {
  siteMetadata: {
    title: `StyleQ`,
    description: `The styleQ blog.`,
    author: `Joseph Rex`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/bookstyleq`
      },
      {
        name: `Facebook`,
        url: `https://www.facebook.com/BookStyleQ/`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/intostyleq/`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `styleq-blog`,
        short_name: `styleq`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
