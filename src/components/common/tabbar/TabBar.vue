<template>
  <div class="tabbar">
    <slot></slot>
   </div>
</template>

<script>
export default {
  name:'tabbar'
}
</script>

<style>
.tabbar {
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    font-size: 13px;
    /* 使用户看着过渡更舒服 */
    box-shadow: 0 -2px 2px #e4e2e2;
  }
  
</style>