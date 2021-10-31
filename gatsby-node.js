const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const analyzerMode = process.env.ANALYZE ? "server" : "json";

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode,
          reportFileName: `./__build/bundlereport.json`,
        })
      ]
    })
  }

  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsConfigPathsPlugin(),
      ]
    }
  })
}