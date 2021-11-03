const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({stage, actions}) => {
  const analyzerMode = process.env.ANALYZE ? 'server' : 'json';

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode,
          reportFileName: `./__build/bundleReport.json`,
        }),
      ],
    });
  }

  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsConfigPathsPlugin(),
      ],
    },
  });
};

// const path = require('path');
// const {createFilePath} = require('gatsby-source-filesystem');

// exports.onCreateNode = ({node, actions, getNode}) => {
//   const {createNodeField} = actions;

//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({node, getNode});

//     createNodeField({
//       name: 'slug',
//       node,
//       value: `/blog${value}`,
//     });
//   }
// };

// exports.createPages = async ({graphql, actions, reporter}) => {
//   const {createPage} = actions;
//   let result;

//   if (process.env.NODE_ENV === 'development') {
//     result = await graphql(`
//       query {
//         allMdx {
//           edges {
//             node {
//               id
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `);
//   } else {
//     result = await graphql(`
//       query {
//         allMdx(
//           filter: {slug: {regex: "/^(?!drafts/).*/"}}
//         ) {
//           edges {
//             node {
//               id
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `);
//   }

//   if (result.errors || !result) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }

//   const posts = result.data.allMdx.edges;

//   posts.forEach(({node}, index) => {
//     createPage({
//       // This is the slug you created before
//       // (or `node.frontmatter.slug`)
//       path: node.fields.slug,
//       // This component will wrap our MDX content
//       component: path.resolve(`./src/components/mdx/Layout.tsx`),
//       // You can use the values in this context in
//       // our page layout component
//       context: {id: node.id},
//     });
//   });
// };
