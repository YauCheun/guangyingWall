<!--
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 11:20:26
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-25 12:50:49
 * @FilePath: \guangyingWall\src\components\mobile\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="wall-index">
        <TopBar></TopBar>
        <router-view name="mobile"></router-view>
        <!-- <video class="bg-video" src="@/assets/images/qm1.mp4" loop="true" autoplay="true" muted="true" ></video> -->
    </div>
</template>
<script setup lang="ts">
import TopBar from './TopBar.vue';
import { signIpApi } from '@/api/index.js'
import { useStore } from '@/store/index';
import { onMounted } from 'vue'
const store = useStore()
const getUser = () => {
    signIpApi().then((res: { ip: string; }) => {
        let user = {
            id: res.ip
        }
        store.getUser(user)
    })

}
onMounted(() => {
    getUser()
})
</script>
<style lang="less" scoped>
.wall-index {
    .bg-video {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        height: 880px;
    }
}
</style>