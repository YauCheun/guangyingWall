/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 11:04:04
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 23:27:33
 * @FilePath: \guangyingWall\src\utils\axios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { baseUrl } from "./env";
import axios from "axios";
const service = axios.create({
    baseURL  : baseUrl,
})

//请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject()
    }
)

//相应拦截器
service.interceptors.response.use(
    response => {
        if(response.status == 200 || response.status == 201 ){
            return response.data
        }else{
            Promise.reject()
        }
    },
    error => {
        console.log(error)
        return Promise.reject()
    }
)
export default service