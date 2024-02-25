/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 10:42:48
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-25 12:36:14
 * @FilePath: \guangyingWall\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router"
import KMR  from './components/KMR/index.js'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(KMR)
app.mount('#app')