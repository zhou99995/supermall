<template>
  <div>
    <bottom-bar>
    <div slot="center">购物街</div>
  </bottom-bar>
  <homeswiper/>
  <homenav/>
  <tdimg/>
  <yard/>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </div>
</template>

<script>
import bottomBar from 'components/content/bottombar/bottomBar'
import homeswiper from './homechild/homeswiper'
import homenav from './homechild/homenav'
import tdimg from './homechild/tdimg'
import yard from './homechild/zhouyard/yard'
// 这里是better-scroll组件封装完成的部分
import scroll from 'components/common/scroll/scroll'

export default {
  components:{
    bottomBar,
    homeswiper,
    homenav,
    tdimg,
    yard,
    scroll,
  },
  data(){
    return {
      news:'我在这'
    }
  }

}
</script>

<style>

</style>