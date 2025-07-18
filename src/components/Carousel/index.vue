<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carouselData in carouselList" :key="carouselData.id">
                <img :src="carouselData.imgUrl">
            </div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
export default {
    name:'CarouselComponents',
    props:['carouselList'],
    data() {
        return {
            
        }
    },

    watch: {
        carouselList: {
            immediate: true,
            handler(oldValue, newValue) {
                
                
                this.$nextTick(() => {
                    let mySwiper = new Swiper('.swiper-container', {

                        //开启循环模式
                        loop: true,

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                    });
                });

            }
        },
    },

}
</script>