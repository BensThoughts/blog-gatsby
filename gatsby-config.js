module.exports = {
  siteMetadata: {
    siteUrl: "https://bensthoughts.dev",
    title: "bensthoughts.dev",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTsx: true,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/posts-mdx`
      }
    }
  ],
};
