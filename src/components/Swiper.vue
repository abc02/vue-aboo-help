<template>
  <mt-swipe :auto="0">
    <mt-swipe-item>1sadasdasdasd</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</template>

<style lang="scss">
  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    .slide1 {
      background-color: #0089dc;
      color: #fff;
    }
    .slide2 {
      background-color: #ffd705;
      color: #000;
    }
    .slide3 {
      background-color: #ff2d4b;
      color: #fff;
    }
  }
</style>


<script>
import Vue from 'vue'

export default {
    name: 'swipe',
    props: ['lists', 'name'],
    mounted() {
        new Swipe('.swiper-container', {
            loop: true,
            autoplay: 2000,
            pagination: '.swiper-pagination'
        })
    },
    // watch: {
    //     lists(val, oldVal) {
    //         console.log(document.querySelectorAll('.swiper-slide'))
    //         this.$nextTick(() => {
    //             console.log(document.querySelectorAll('.swiper-slide'))
    //         })
    //     }
    // }
}