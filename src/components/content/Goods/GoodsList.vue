<template>
<div class="goods">
    <goods-list-item v-for="item in goods" :GoodsListItem='item' :key="item.acm" ref="goodsItem"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default{
    components:{
      GoodsListItem
    },
    props:{
      goods:Array
    },
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
