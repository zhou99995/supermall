<template>
  <div id="home">
   <nav-bar class="nav-bar" navBgColor='#ff8198'><div slot="center">购物街</div></nav-bar>
   <tab-control v-show="isTabFixed" id="topTabControl" ref="tabControl1" :tabTitle="['流行','新款','精选']" class="tab-control" @TabClick="TabClick"></tab-control>
   <scroll class="content" ref="scroll" :probeType='3' @backTopScroll='backTopScroll' @loadMore='loadMore'>
      <home-swiper :banners="banners" class="home-swiper" @imgLoad='imgLoad'></home-swiper>
      <recommand-view :recommands='recommands'></recommand-view>
      <fashion-view></fashion-view>
      <tab-control v-show="!isTabFixed" ref="tabControl2" :tabTitle="['流行','新款','精选']" class="tab-control" @TabClick="TabClick"></tab-control>
      <goods-list  :goods="goods[currentGoods].lists"></goods-list>
   </scroll> 
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/Goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/BackTop/BackTop'


import HomeSwiper from './childcomps/HomeSwiper.vue'
import RecommandView from './childcomps/RecommandView'
import FashionView from './childcomps/FashionView'




import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommandView,
    FashionView,

  },
  data(){
    return {
      banners:[],
      recommands:[],
      goods:{
        'pop':{page:0,lists:[]},
        'new':{page:0,lists:[]},
        'sell':{page:0,lists:[]},
      },
      currentGoods:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  created(){
    //请求home里面的数据
    this.getHomeMultidata()
    //请求goods里面的数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  mounted(){
    //图片加载完成后，更新better-scroll的可滚动高度
    this.$bus.$on('imgLoad',()=>{
      //这里还可以用better-scroll@2.XX版本自己提供的observe-dom,observe-image
      // this.$refs.scroll.bs.refresh()  //这里调用太过频繁，要用防抖
      // console.log('---');
    })
    //这里设置定时器不好，可以监听图片加载完成后去计算高度！！不然上来就滚动计算出来的值为0，就会产生bug,所以我们采用了imgLoad来监听
    // setTimeout(()=>{
    //   this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    //   console.log(this.tabOffsetTop);
    //   // console.log(this.$refs.tabControl2.$el);
    // },500)
  },
  methods:{
    //防抖debounce
    debounce(fun,delay){
      let timer=null;
      return function (...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
          fun.apply(this,args)
          // console.log('---');
        },delay)
      }
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommands=res.data.recommend.list
        // console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].lists.push(...res.data.list)
        this.goods[type].page +=1
        // console.log(res)
        //better-scroll上拉加载更多后，要调用一次，不然就不能再调用上拉加载更多了
        this.$refs.scroll.bs.finishPullUp()
      })
    },
    TabClick(index){
      switch(index){
        case 0:
        this.currentGoods='pop'
        break;
        case 1:
        this.currentGoods='new'
        break;
        case 2:
        this.currentGoods='sell'
        break;
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    backTopClick(){
      this.$refs.scroll.bs.scrollTo(0,0,500)
    },
    backTopScroll(position){
      //判断backtop是否显示
      if(Math.abs(position.y)>2200){
        this.isShowBackTop=true
      }else{
        this.isShowBackTop=false
      }
      //绝对tabcontrol是否吸顶
      if(Math.abs(position.y)>=this.tabOffsetTop){
        this.isTabFixed=true
      }else{
        this.isTabFixed=false
      }
    },
    loadMore(){
      // console.log('加载更多');
      this.getHomeGoods(this.currentGoods)
    },
    imgLoad(){
       this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
/* .nav-bar{
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    color: #fff;
  } */

  /* 这两种实现方式都可以，下面这种实现方法要给swiper加上一个margin-top */
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    color: #fff;
  } 
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 50;
  } */
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .tabFixed{
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
  }
  #topTabControl{
    margin-top: 44px;
    position: relative;
    z-index: 999;
  }
  .tab-control{
    position: relative;
    z-index: 999;
  }
</style>
