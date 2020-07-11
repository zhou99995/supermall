import axios from 'axios'
export function request(config) {
    const instance1 = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/n3',
		method:"get",
		timeout:5000
	})
	 return instance1(config)
}
export function test1() {
    return request({
        url: '/recommend',
        timeout: 5000
    })
}
export function test2() {
    return request({
        url: '/detail',
        timeout: 5000
    })
}