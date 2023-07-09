<template>
    <Header />
    <section class="cart">
        <div class="inner">
           <h2>SHOPPING CART</h2>
           <div>
            <h3>장바구니 상품</h3>
            <ul>
                <li>
                    <input type="checkbox"/>
                    <div>
                        <img src="" alt=""/> 
                        <div>
                            <p>비타민D</p>
                            <p>36,000원</p>
                            <span class="minus">-</span><span class="count">3</span><span class="plus">+</span>
                        </div>

                    </div>
                </li> 
            </ul>
            <p class="">
                <button class="all">전체 선택</button><button class="cancel">선택 삭제</button>
            </p>

            <ul>
                <li>
                    <span class="title">결제 예정 금액</span>
                    <span class="price">60,000원</span>
                </li>
                <li>
                    <span class="title">총 상품 금액</span>
                    <span class="price">60,000원</span>
                </li>
                <li>
                    <span class="title">총 배송비</span>
                    <span class="price">0원</span>
                </li>
            </ul>

            <p class="">
                <button class="order">전체 상품 주문</button> <button>선택 상품 주문</button>
            </p>



           </div>
        </div>

    </section>
    <Footer />
  </template>
  
  <script lang="ts">
  //https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
  import Header from "../../components/HeaderPage.vue";
  import Footer from "../../components/FooterPage.vue";

  export default {
    name: "CART",
    components: {Header, Footer },
    setup() {
      // let aa = 'dd';
     }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .cart{

        .inner {
        
        width:1200px;
        // height: 300px;
        margin:0 auto;
        // display:flex;
        // justify-content: center;
        // align-items: center;
        background-color: lightblue;
        
        }
    }
 
  
  </style>
  