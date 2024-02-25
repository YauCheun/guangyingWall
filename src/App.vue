<!--
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 10:42:48
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-25 12:46:37
 * @FilePath: \guangyingWall\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view v-if="showPage == 1" name="mobile"></router-view>
  <router-view v-if="showPage == 2" name="pc"></router-view>
</template>


<script setup lang="ts">
import { onMounted,ref } from 'vue';
//移动端路由为1 PC端路由为2
const showPage = ref(1)

const _isMobile = () => {
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
return flag;
}

onMounted(() => {
if(_isMobile()){
  //移动端
  showPage.value = 1
}else{
  //PC 端
  showPage.value = 2
}
})
</script>

<style lang="less">
@import url(@/styles/common.less);
@import url(@/assets/fonts/icon/iconfont.css);
// 去除屏幕右侧滚动条
::-webkit-scrollbar {
width: 0 !important;
}
::-webkit-scrollbar {
width: 0 !important;height: 0;
}
</style>