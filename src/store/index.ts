/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 10:48:49
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-25 10:51:57
 * @FilePath: \guangyingWall\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

export const useStore = defineStore('useStore', {

    state: () => {
        return {
            count: 0,
            user: {id:''}
        }
    },
    /**
     * 用来封装计算属性 有缓存功能  类似于computed
     */
    getters: {

    },
    /**
     * 编辑业务逻辑  类似于methods
     */
    actions: {
        increament() {
            this.count++
        },
        getUser(n: any) {
            this.user = n
        }
    }

})
export default useStore

