<template>
  <div class="yard">
    <div><slot name="headline"></slot></div>
    <div><slot name="sentence"></slot></div>
    <!-- 下面两个放图片 -->
    <slot name="img1"></slot>
    <slot name="img2"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>