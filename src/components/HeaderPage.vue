<template>
  <header class="header">
    <div class="inner">
        <h1 class="logo">DOTORI JAMBO</h1>
        <div class="menu">
            <p class="product">상품</p>
            <p class="cs">고객센터</p>
        </div>
    </div>
  </header>
</template>

<script lang="ts">
//https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
export default {
    name: "HEADER",
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
    $bgColor : #ff6b00;
.header {
    background-color:$bgColor;
   
    .inner {

        
        width:1200px;
        height: 100px;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
    }
}

</style>
