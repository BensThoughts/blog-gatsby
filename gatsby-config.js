// allSitePage(filter: {path: {regex: "/^(?!\\/blog)/"}}) {
//   nodes {
//     path
//   }
// }
// allMdx(filter: {slug: {regex: "/^[^_]/"}}) {
//   nodes {
//     slug
//   }
// }

const path = require('path');
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules',
);
const siteUrl = process.env.URL || 'https://bensthoughts.dev';


module.exports = {
  siteMetadata: {
    title: 'bensthoughts.dev',
    titleTemplate: '%s · bensthoughts.dev',
    description: 'My personal portfolio and blog page',
    siteUrl: siteUrl,
    url: 'https://bensthoughts.dev',
    twitterUsername: '@bensthoughts',
    image: 'https://res.cloudinary.com/bensthoughts/image/upload/v1630560422/blog/og-image/og-header-image_l1kxju.png',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -70,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        excludes: ['drafts/'],
        filterPages: (page, exclude) => {
          if (page.path.includes(exclude)) {
            return true;
          }
          return false;
        },
        resolveSiteUrl: () => siteUrl,
        serialize: ({path}) => {
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/App.tsx`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/posts-mdx`,
        ignore: process.env.NODE_ENV === `production` ?[`**/drafts*`] : [],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
  ],
};
