module.exports = {
  chainWebpack: (config) => {
    console.log('config', config)
    // config.plugins.delete("prefetch") // for async routes
    config.plugins.delete("preload") // for CSS
    return config
  },
}
