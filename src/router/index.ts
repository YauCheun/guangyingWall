/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 10:52:32
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-25 12:46:07
 * @FilePath: \guangyingWall\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path : '/',
        redirect : '/wall?id=0',
        name : 'index',
        components : {
            default : () => import('@/views/index.vue'),
            pc : () => import('@/views/index.vue'),
            mobile : () => import('@/components/mobile/index.vue')
        },
        children : [{
            path : 'wall',
            components : {
               default: () => import('@/views/WallMessage.vue'),
               pc : () => import('@/views/WallMessage.vue'),
               mobile : () => import('@/components/mobile/WallMessage.vue')
            }}
    ]
    }
]
const router = createRouter({
    history : createWebHashHistory(),
    routes
})
export default router