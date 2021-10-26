export function debounce(fun,delay){
   //防抖debounce
  let timer=null;
  return function (...args){
    if(timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      fun.apply(this,args)
      console.log('---');
    },delay)
  }
}