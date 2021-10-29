module.exports = {
  siteMetadata: {
    title: "bensthoughts.dev",
    titleTemplate: "%s · bensthoughts.dev",
    description: "My personal portfolio and blog page",
    siteUrl: "https://bensthoughts.dev",
    url: "https://bensthoughts.dev",
    twitterUsername: "@bensthoughts",
    image: "https://res.cloudinary.com/bensthoughts/image/upload/v1630560422/blog/og-image/og-header-image_l1kxju.png"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/posts-mdx`
      }
    }
  ],
};
