import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')






// 以下是几个高阶函数的使用
// const arr1=[1,2,3,4,5]
// const arr2=[
//   {
//   name:"jan",
//   age:18,
//   address:"China"
//   },
//   {
//     name:"kobe",
//     age:20,
//     address:"America"
//   }
// ]
// for(let i in arr2){
  // console.log(i)//取到的是下标值
// }
// for(let i of arr2){
  // console.log(i.age)//取到的是数组本身的属性
// }
// console.log(arr1.filter(item => item > 2).length);
// console.log(arr1.filter(item => item > 2));
// console.log(arr1.map(item => item * 2));
// let result= arr1.map(item =>item * 2).reduce((previousValue, currentValue) => {
//   return previousValue+currentValue;
// })
// console.log(result);




