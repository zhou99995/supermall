<template>
  <nav-bar>
      <div slot="left" class="detailLeft" @click="detailLeftClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailCenter">
        <div v-for="(item,index) in arr" :key="index" 
        class="detailItem" :class="{active:currentIndex===index}" @click="detailItemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data(){
    return{
      arr:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
     detailItemClick(index){
      this.currentIndex=index
    },
    detailLeftClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detailCenter{
    display: flex;
  }
  .detailItem{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
  .detailLeft img{
    width: 22px;
    height: 22px;
    margin-top: 13px;
  }
</style>