<template>
    <section class="event">
        <div class="inner">
            <div class="event-list-area">
                <h1>이벤트리스트</h1>
            </div>
        </div>


    </section>
  </template>
  
  <script lang="ts">
  //https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
  export default {
      name: "EVENT",
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
    .event{

        .inner {
        
        width:1200px;
        height: 300px;
        margin:0 auto;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: grey;
        
        }
    }
 
  
  </style>
  