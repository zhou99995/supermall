<template>
  <div id="app">
    <TabBarView/>
    <router-view/>
  </div>
</template>
<script>
import TabBarView from './components/content/TabBar-view/TabBar-view.vue'

export default {
  data(){
    return {
    }
  },
  components:{
    TabBarView,
  }
  
}
</script>

<style>
@import 'assets/css/base.css';
</style>
