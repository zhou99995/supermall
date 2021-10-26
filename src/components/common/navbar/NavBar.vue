<template>
  <div class="nav-bar" :style="barColor">
   <div class="left"> <slot name="left"></slot></div>
   <div class="center"> <slot name="center"></slot></div>
   <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    navBgColor:String
  },
  computed:{
    barColor(){
      return {backgroundColor:this.navBgColor}
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left,
  .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>