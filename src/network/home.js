import { request } from "./request";
export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    timeout:5000
  })
}

export function getHomeGoods(type,page){
	return request({
		url:'/home/data',
		timeout:5000,
		params:{
			type,
			page
		}
	})
}
