<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="GoodsListItem.show.img" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{GoodsListItem.title}}</p>
      <span class="price">￥{{GoodsListItem.price}}</span>
       <span class="price-icon"></span>
      <span  class="collect">{{GoodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      GoodsListItem:Object
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      goodsItemClick(){
        // this.$router.push('/detail/'+this.GoodsListItem.iid)
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.GoodsListItem.iid
          }
        })
      }
    }
  }
</script>


<style scoped>
  .goods-item{
    position: relative;
    z-index: 1000;
    width: 48%;
    margin-top: 5px;
    padding-bottom: 50px;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
  }
  .goods-info p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 14px;
    padding: 5px 0 3px 0;
  }
  .price {
    color: #FF5777;
    font-size: 16px;
    margin-right: 15px;
  }
  .collect{
    position: relative;
    font-size: 16px;
  }
  .price-icon{
    display: inline-block;
    margin-right: 2px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  /* .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 13px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  } */
</style>
