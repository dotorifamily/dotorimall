const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          
        `,
      },
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  // options...
  devServer: {
    // disableHostCheck: true,
    allowedHosts: "all",  //dev환경에서 모든 host(도메인)을 허용한다.
  },
});
