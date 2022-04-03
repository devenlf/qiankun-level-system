const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.PROT,
    host: 'localhost',
    https: false,
    open: true
},
})
