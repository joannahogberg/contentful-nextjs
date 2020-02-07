require('dotenv').config()
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
      })
    )
    return config
  },
  env: {
	CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  }
})
