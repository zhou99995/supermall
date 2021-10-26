<template>
  <div id="detail">
    <detail-bar/>
    <detail-swiper :topImages='topImages'></detail-swiper>
  </div>
</template>

<script>
import DetailBar from './childcomps/DetailBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'

//网络请求
import {getDetailData} from 'network/detail'
export default {
  name:'Detail',
  data(){
    return{
      iid:'',
      topImages:[],

    }
  },
  created(){
    this.iid=this.$route.query.iid
    getDetailData(this.iid).then(res=>{
      //由于这里面的数据较多，所以我们分类保存下来，便于接下来的使用
      console.log(res);
      //detail轮播图的数据
      this.topImages=res.result.itemInfo.topImages
      

    })
  },
  components:{
    DetailBar,
    DetailSwiper
  },
  methods:{
   
  }
}
</script>

<style scoped>
  
</style>