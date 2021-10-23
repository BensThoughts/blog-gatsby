const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsConfigPathsPlugin()
      ]
    }
  })
}