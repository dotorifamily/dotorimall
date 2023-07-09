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
    proxy: 'http://localhost:3000',
    // proxy: { // proxyTable 설정
    //   '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
    //       target: 'http://localhost:3000', // www.xxx.com
    //       changeOrigin: true
    //   },
    //    '/': { // /로 url 이 시작하면 이렇게 target을 잡아준다. 
    //       target: 'http://localhost:3000',
    //       changeOrign: true
    //   }, 
    // }
  },
  
});
