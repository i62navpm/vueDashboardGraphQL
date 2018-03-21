const S3Plugin = require('webpack-s3-plugin')

module.exports = options => ({
  html: {
    template: './src/index.html',
  },
  entry: './src/main.js',
  presets: [
    require('poi-preset-bundle-report')(),
    require('poi-preset-eslint')({ mode: '*' }),
    require('poi-preset-yaml')(),
    require('poi-preset-uglifyjs')(),
  ],
  webpack: (config, options, webpack) => {
    if (process.env.PUBLISH_S3 === 'true') {
      config.plugins.push(
        new S3Plugin({
          s3Options: {
            accessKeyId: process.env.S3_KEY,
            secretAccessKey: process.env.S3_SECRET,
            region: process.env.S3_REGION,
          },
          s3UploadOptions: {
            Bucket: process.env.S3_BUCKET,
          },
        })
      )
    }
    return config
  },
})
