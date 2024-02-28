/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-28 22:46:35
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 22:48:12
 * @FilePath: \guangyingWall\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fetch from '../utils/axios'
//新建数据
export function insertWallApi(data){
    return fetch.post('/walls/insertwall',data)
}
//获取IP
export function signIpApi(){
    return fetch.post('/signip')
}
//查询墙
export function findWallPageApi(data){
    return fetch.post('/walls/findwallpage',data)
}
//新建反馈
export function insertFeedBackApi(data){
    return fetch.post('/feedbacks/insertfeedback',data)
}
//新建评论
export function insertCommentApi(data){
    return fetch.post('/comments/insertcomment',data)
}
//获取评论
export function findCommentPage(data){
    return fetch.post('/comments/findcommentpage',data)
}
//上传图片
export function proFileApi(data){
    return fetch.post('/profile',data)
}