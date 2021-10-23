module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog-gatsby",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTsx: true,
      }
    }
  ],
};
