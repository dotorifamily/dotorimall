<template>
    <section class="bestproduct">
        <div class="inner">
            <div class="bestproduct-list-area">
                
                <swiper
                    class="swiper"
                    :modules="modules"
                    :slides-per-view="1"
                    navigation
                    :pagination="{ clickable: true }"
                    :scrollbar="{ draggable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide><h2>대표상품 1</h2></swiper-slide>
                    <swiper-slide><h2>대표상품 2</h2></swiper-slide>
                    <swiper-slide><h2>대표상품 3</h2></swiper-slide>
                    <swiper-slide><h2>대표상품 4</h2></swiper-slide>
                    ...
                </swiper>
                
            </div>
        </div>


    </section>
  </template>
  
  <script lang="ts">
  //https://kyounghwan01.github.io/Vue/vue3/composition-api/#ref-reactive-%EC%B0%A8%EC%9D%B4
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper as SwiperClass } from 'swiper/types';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default {
    name: "BESTPRODUCT",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper :SwiperClass) => { 
            console.log(swiper);
        };
        const onSlideChange = () => { 
                    console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        }
            

    }
  }

  </script>
  
  <style scoped lang="scss">
    .bestproduct {

        .inner {
        
            width:1200px;
            // height: 300px;
            margin:0 auto;
            padding: 130px 0;
            display:flex;
            justify-content: center;
            align-items: center;
            // background-color: grey;
            
            .swiper{
                width: 1032px;
                height: 650px;
                background-color: mediumaquamarine;
                margin:0 auto;
            }
        }
    }
 
  
  </style>
  