<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      bs:null
    }
  },
  mounted(){
    this.bs = new BetterScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
      observeDOM: true,
      observeImage: true
    })
    this.bs.on('scroll',position=>{
      this.$emit('backTopScroll',position)
    })
    this.bs.on('pullingUp', () => {
      //请求数据
      // console.log('上拉加载更多');
      this.$emit('loadMore')
  })
  }
}
</script>

<style scoped>

</style>