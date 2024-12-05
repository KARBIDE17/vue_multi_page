const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/Platform': {
        target: 'https://cors-proxy.fwdigital.net/https://api.giphy.com/v1/gifs/trending',
        changeOrigin: true,
        pathRewrite: { '^/Platform': '/Platform' },
      },
    },
  },
};
