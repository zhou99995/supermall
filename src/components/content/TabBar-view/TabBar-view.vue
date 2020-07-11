<template>
  <TabBar>
    <TabBarItem class="tabbar-item" path="/home">
      <img src="~assets/img/tabbarImg/home-bg.png" alt="" slot="item-icon1">
      <img src="~assets/img/tabbarImg/home.png" alt="" slot="item-icon2">
      <router-link to="view/home/home"></router-link>
    </TabBarItem>
    <TabBarItem class="tabbar-item" path="/differ">
      <img src="~assets/img/tabbarImg/differ-bg.png" alt="" slot="item-icon1">
      <img src="~assets/img/tabbarImg/differ.png" alt="" slot="item-icon2">
      <router-link to="view/differ/differ"></router-link>
    </TabBarItem>
    <TabBarItem class="tabbar-item" path="/cart">
      <img src="~assets/img/tabbarImg/cart-bg.png" alt="" slot="item-icon1">
      <img src="~assets/img/tabbarImg/cart.png" alt="" slot="item-icon2">
      <router-link to="view/cart/cart"></router-link>
    </TabBarItem>
    <TabBarItem class="tabbar-item" path="/profile">
      <img src="~assets/img/tabbarImg/user-bg.png" alt="" slot="item-icon1">
      <img src="~assets/img/tabbarImg/user.png" alt="" slot="item-icon2">
      <router-link to="view/profile/profile"></router-link>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBar-item.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style>
  TabBar {
    display: flex;
    text-align: center;
  }
  .tabbar-item {
    flex: 1;
  }
  .tabbar-item img {
    width: 65px;
  }
</style>