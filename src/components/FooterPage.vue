<template>
  <footer class="footer">
    <div class="inner">
        <span>
            <h1>사업자명 : 도토리패밀리</h1>
            <h2>사업자등록번호 : 111-11-11111</h2>
        </span>
    </div>
</footer>
</template>

<script lang="ts">
//https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
export default {
    name: "FOOTER",
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
    $bgColor : white;
    $innerBgColor : #ff6b00;
.footer {
    background-color:$bgColor;

    .inner {
        
        width:1200px;
        height: 100px;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        background-color: $innerBgColor;
        
        .sitemap {
            display:flex;
        }
    }
}

</style>
