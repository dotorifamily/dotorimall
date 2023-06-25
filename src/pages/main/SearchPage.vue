<template>
    <section class="search">
        <div class="inner">
            <div class="search-area">
                <input type="text" placeholder="찾으시는 상품을 검색해보세요!"/>
                <img src="" alt="search-btn"/>
            </div>

        </div>


    </section>
  </template>
  
  <script lang="ts">
  //https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
  export default {
      name: "SEARCH",
     setup() {
      // let aa = 'dd';
     }
  }
  // import { Options, Vue } from 'vue-class-component';
  
  // @Options({
  //   props: {
  //     msg: String
  //   }
  // })
  // export default class HelloWorld extends Vue {
  //   msg!: string
  // }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .search{

        .inner {
        
        width:1200px;
        height: 300px;
        margin:0 auto;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        
        }
    }
 
  
  </style>
  