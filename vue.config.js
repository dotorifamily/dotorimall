const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css : {
    loaderOptions : {
      sass: {
        additionalData : `
          
        `
      }
    }
  },
  transpileDependencies: true,
  lintOnSave : false,
  
})


