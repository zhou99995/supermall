<template>
  <div  class="recommad-view">
    <div v-for="item in recommands" :key="item.title" class="recommand-view-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommands:Array
  }
}
</script>

<style>
  .recommad-view{
    display: flex;
    text-align: center;
    padding: 12px 0 20px 0 ;
    border-bottom: 10px solid #eee; 
  }
  .recommand-view-item{
    flex: 1;
  }
  .recommand-view-item img{
    width: 78px;
    height: 78px;
    margin-bottom: 8px;
  }
  .recommand-view-item a {
    font-size: 14px;
  }
</style>