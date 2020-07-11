<template>
   <div class="tabbar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon1" ></slot></div>
     <div  v-else><slot name="item-icon2"></slot></div>
   </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:{
    path:{
      type:String,
      required:true
    }
  },
  computed:{
    isActive() {
				return this.$route.path.indexOf(this.path) !== -1
      },
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
.tabbar-item {
    flex: 1;
  }
  .tabbar-item img {
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>