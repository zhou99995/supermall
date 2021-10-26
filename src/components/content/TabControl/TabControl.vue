<template>
  <div class="TabControl">
    <div v-for="(item,index) in tabTitle" 
          :key="index" 
          class="TabControlItem"
          :class="{TabControlItemActive:currentIndex==index}"
          @click="TabControlItemClick(index)"
          >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tabTitle:Array
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    TabControlItemClick(index){
      this.currentIndex=index
      this.$emit('TabClick',index)
    }
  }
}
</script>

<style scoped>
  .TabControl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .TabControlItem{
    flex: 1;
  }
  .TabControlItem span{
    padding: 5px;
  }
  .TabControlItemActive{
    color: var(--color-high-text);
  }
  .TabControlItemActive>span{
    border-bottom: 2.5px solid var(--color-tint);
  }
</style>