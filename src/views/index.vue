<!--
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 10:55:16
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-29 22:33:52
 * @FilePath: \guangyingWall\src\views\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wall-index">
    <TopBar />
    <!-- <video class="bg-video" src="@/images/qm1.mp4" loop="loop" autoplay="autoplay" muted="muted" ></video> -->
    <router-view name="pc"></router-view>
    <FootBar></FootBar>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/pc/TopBar.vue";
import FootBar from "@/components/pc/FootBar.vue";
import { useStore } from "@/store/index";
import { onMounted } from "vue";
import { signIpApi } from '@/api/index.js'
const store = useStore();
const getUser = () => {
  signIpApi().then((res: { ip: any; }) => {
    let user = {
      id: res.ip
    }
    store.getUser(user);
  })

};
onMounted(() => {
  getUser();
});
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
