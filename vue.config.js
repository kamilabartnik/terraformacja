module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/terraformacja/'
      : '/dist'
  }