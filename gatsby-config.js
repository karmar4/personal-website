module.exports = {
  siteMetadata: {
    title: `Hi`,
    socials: [
      {
        name: "github",
        link: "https://github.com/benhili"
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/benjamin-hili-ab2430120"
      },
      {
        name: "email",
        link: "mailto:ben.hili1994@gmail.com?Subject=Lets%20Chat"
      }
    ],
    description: `Portfolio Website`,
    author: `@benhili`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`
      }
    }
  ]
};
