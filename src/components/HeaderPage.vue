<template>
  <header class="header">
    <div class="inner">
        <h1 class="logo">DOTORI JAMBO</h1>
        <div class="menu">
            <p class="product">상품</p>
            <p class="cs">고객센터</p>
        </div>
    </div>
    <div class="side-menu">
        <p class="mypage"><a href="./" title="mypage"><img src="../assets/images//commons/mypage.png" alt="mypage" /></a></p>
        <p class="cart"><a href="/" title="cart"><img src="../assets/images/commons/cart.png" alt="cart" /></a></p>
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $bgColor : #ff6b00;
.header {
    background-color:$bgColor;
    height:100px;
    display:flex;
    align-items: center;
    .inner {
        
        width:1200px;
        // height: 100px;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        
        .menu {
            display:flex;
            
        }
    }

    .side-menu{
        position:absolute;
        right:60px;
        top:32px;
        display:flex;

        p {
            width:36px;
            height:36px;
            img{
                width:100%;
                height:100%;
            }
        }
       
    }
}

</style>
