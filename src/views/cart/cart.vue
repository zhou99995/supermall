<template>
  <div id="cart">
	<!-- 	<ul>
			<li v-for="item in img">{{item.image}}</li>
		</ul> -->
	</div>
</template>

<script>
	import {test1} from 'network/request.js'
export default {
	name:"cart",
	data(){
		return{
			img:[]
		}
	},
	created:function(){
		console.log(111)
		test1().then(res=>{
			console.log(res.data.data.list)
			this.img=res.data.data.list
		}).catch(err=>{
			console.log(err)
		})
	},
		
}
</script>

<style>

</style>