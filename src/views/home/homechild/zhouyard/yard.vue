<template>
  <div>
    <div id="yard">
    <yard class="yard-left yard-main">
    <h2 slot="headline">职场精英</h2>
    <p slot="sentence">成为同事们关注的热点</p>
    <img src="~assets/img/td/watch1.jpg" alt="" slot="img1">
    <img src="~assets/img/td/watch2.jpg" alt="" slot="img2">
  </yard>
  <yard class="yard-right yard-main">
    <h2 slot="headline">品质生活</h2>
    <p slot="sentence">讲究是一种生活态度</p>
    <img src="~assets/img/td/phone1.jpg" alt="" slot="img1">
    <img src="~assets/img/td/phone2.jpg" alt="" slot="img2">
  </yard>
  </div>
  <div>
    <div id="yard2">
    <yard-item class="yard-main">
    <h2 slot="head">一表人才</h2>
    <p slot="st">谁带谁时尚</p>
    <img src="~assets/img/td/one.jpg" alt="" slot="img">
  </yard-item>
  <yard-item class="yard-main  yard-left">
    <h2 slot="head">水果汇聚</h2>
    <p slot="st">营养美味</p>
    <img src="~assets/img/td/two.jpg" alt="" slot="img">
  </yard-item>
  <yard-item class="yard-main yard-right">
    <h2 slot="head">钟情简约</h2>
    <p slot="st">打造美丽</p>
    <img src="~assets/img/td/three.jpg" alt="" slot="img">
  </yard-item>
  <yard-item class="yard-main">
    <h2 slot="head">品质潮人</h2>
    <p slot="st">品质生活控</p>
    <img src="~assets/img/td/four.jpg" alt="" slot="img">
  </yard-item>
  </div>
  </div>



  </div>
   
</template>

<script>
import yard from './yardItem'
import yardItem from './yardItem2'
export default {
  components:{
    yard,
    yardItem,
  }
}
</script>

<style>
#yard,
#yard2 {
  margin: 0 auto;
  width: 95%;
  display: flex;
}
#yard {
  padding-bottom: 4px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ccc;
}
  .yard-main {
    flex: 1;
   
  }
  .yard-left,
  .yard-right  {
  padding: 0 8px;
  }
  .yard-left {
    border-right: 1px solid #ccc;
  }
  .yard-main h2 {
     font-size: 14px;
     font-weight: 700;
     color: #45CAFF;
  }
  .yard-main p {
    font-size: 10px;
  }
  .yard-main img {
    width: 50%;
    padding: 5px 8px 0;
  }
  #yard2 h2 {
    color: black;
  }
  #yard2 img {
    width: 100%;
  }
</style>