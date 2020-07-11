<template>
  <div id="bottomBar">
    <span class="left"><slot name="left" ></slot></span>
    <span class="center"><slot name="center" ></slot></span>
    <span  class="right"><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props:{
   
  }
}
</script>

<style>
  #bottomBar {
    display: flex;
    text-align: center;
    background-color: #c82519;
    color: #fff;
    font-size: 14px;
  }
  .left,
  .right {
    width: 66px;
    height: 44px;
    line-height: 44px;
  }
  .center {
    flex: 1;
    height: 44px;
    line-height: 44px;
  }
</style>