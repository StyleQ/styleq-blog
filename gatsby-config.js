require('dotenv').config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: `StyleQ Blog`,
    name: `StyleQ`,
    siteUrl: `https://blog.bookstyleq.com`,
    description: `StyleQ connects users to beauty and wellness professionals, instantly. StyleQ empowers local salons and independent stylists to generate profitable appointments during gaps in their schedules, and allows users to book appointments on the spot.`,
    hero: {
      heading: `Welcome to StyleQ Blog, a home for hairstyling and beauty content.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/bookstyleq`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/BookStyleQ/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/intostyleq`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/styleq/`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: false,
          contentful: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://bookstyleq.us4.list-manage.com/subscribe/post?u=ca7d77d8dd73f52e49e56d814&id=646b5bfa5e',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
};
