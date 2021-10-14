<template>
     <div class="tab-bar-item" @click="itemClick">
       <div v-if="!isActive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
       <div :style="activeStyle"><slot name="item-text"></slot></div>
     </div>
</template>

<script>
export default {
  data(){
    return{
      // isActive:false
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  computed:{
    isActive(){
      //注意这种写法，多积累！！！！
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err=>{
        console.log(err);
      })
      // console.log(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    text-align: center;
    flex: 1;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  /* .active{
    color: red;
  } */
</style>