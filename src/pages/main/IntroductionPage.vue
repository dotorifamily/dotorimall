<template>
    <section class="introduction">
        <div class="inner">
            <div class="product">
              <h4 class="product__title">상품 소개</h4>
              <p class="product__desc">상품 소개하는 내용</p>
              <ul class="item">
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
                <li>
                    <img class="item__img" src="" alt=""/>
                    <div class="item__desc">                        
                        <span class="item__desc__title">상품제목</span>
                        <span class="item__desc__price">32,700원</span>
                    </div>

                </li>
              
              </ul>
            </div>

        </div>


    </section>
  </template>
  
  <script lang="ts">
  //https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
  export default {
      name: "INTRODUCTION",
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
    .introduction{
        .inner {        
        width:1200px;
        height: 910px;
        margin:0 auto;
        display:flex;
        justify-content: center;
        background-color: skyblue;        
        }
        .product {
            &__title {
                margin-top:30px;
                font-size:20px;
                font-weight: 600;
            }
            &__desc{
                margin-top:30px;
            }
            .item {
                padding: 10px 90px;
                display:flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                li {
                    margin-top:20px;
                    margin-right: 10px;
                    width:255px;
                    height:230px;
                    position:relative;

                    & img{
                        position: absolute;
                        left:0;
                        top:0;
                        width:100%;
                        height: 100%;
                        background-color: yellow;
                    }
                    .item__desc{
                        position: absolute;
                        bottom: 0;
                        left:0;
                        background-color: rgba(0,0,0,0.5);
                        width:100%;

                        height: 80px;
                        &__title{
                            display:block;
                            position:absolute;
                            top:10px;
                            left:10px;
                            
                        }
                        &__price {
                            display:block;
                            position: absolute;
                            right: 10px;
                            bottom: 10px;
                        }
                    }
                }

            }
        }
    }
 
  
  </style>
  