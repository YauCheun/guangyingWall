<template>
    <transition name="views" key="box1">
        <div class="viewer" v-if="isview">
            <div class="bg">
                <!-- 左 -->
                <div class="switch">
                <!-- <div class="switch sw-left" @click="changeNumber(0)" v-show="number > 0"> -->
                    <span class="iconfont icon-xiangzuo" @click="changeNumber(0)"></span>
                </div>
                <!-- 图片 -->
                <div class="viewer-photo" @click="showPhotoDetail">
                    <img :src="'http://localhost:3000'  + photo[number] " alt=''>
                </div>

                <!-- 右 -->
                <div class="switch">
                    <!-- <div class="switch sw-right" @click="changeNumber(1)" v-show="number < photo.length - 1"> -->
                    <span class="iconfont icon-xiangyou" @click="changeNumber(1)"></span>
                </div>
                <!-- 退出图片查看 -->
                <div class="back" @click="backToCard">
                    <span class="iconfont icon-guanbi"></span>
                </div>
            </div>
        </div>
    </transition>

</template>
<script setup lang="ts">
import { computed } from 'vue';
// import { baseUrl } from '@/utils/env.js';
const props = defineProps({
    photos: {
        type: Array,
        default: ()=>[]
    },
    nowNumber: {
        type: Number,
        default: 0
    },
    isView: {
        default: false
    }
})
// defineEmits的用法是在子组件中定义接收父组件传过来的方法
const emits = defineEmits(['viewSwitch','showPhotoDetail','backToCard'])

//是否展示
const isview = computed(() => {
    return props.isView
})
//当前ID
const number = computed(() => {
    return props.nowNumber
})
const photo = computed(()=>{
    return props.photos
})
const changeNumber = (e:number) => {

    emits('viewSwitch', e)
}
const showPhotoDetail = (e:MouseEvent) => {

    emits('showPhotoDetail', e)
}
const backToCard = (e:MouseEvent) => {

    emits('backToCard', e)
}
</script>
<style lang="less" scoped>
.views {
    &-enter {
        &-from {
            opacity: 0;
        }

        &-active {
            transition: all .2s ease-in;
        }

        &-to {
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            opacity: 1;
        }

        &-active {
            transition: all .2s ease-out;
        }

        &-to {
            opacity: 0;
        }
    }

}

.viewer {
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;  
    background: rgba(255, 255, 255.0.9);
    backdrop-filter: blur(20px);
    .bg {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        position: relative;
        .viewer-photo {
            width: 1500px;
            height: 800px;

            display: flex;
            align-items: center;
            justify-content: center;

            img {
                //图片自适应
                max-width: 100%;
                max-height: 100%;
            }
        }

        .switch {
            width: 56px;
            height: 56px;
            background: @gray-3;
            color: #ffffff;
            margin: auto;
            transition: @tr;
            cursor: pointer;
            opacity: 0.5;

            display: flex;
            justify-content: center;
            align-items: center;

            .iconfont {
                font-size: 24px;

            }
            &:hover{
                opacity: 0.8;
                .iconfont {
                    font-size: 30px;
                }
            }

        }
        .back{
                width: 56px;
                height: 56px;
                background: @gray-3;
                color: #ffffff;
                opacity: 0.5;
                transition: @tr;

                position:absolute;
                right: 70px;
                top: 15%;

                display: flex;
                justify-content: center;
                align-items: center;

                .iconfont{
                    font-size: 24px;
                }
                &:hover {
                    opacity: 1;
                    .iconfont {
                        font-size: 30px;
                    }
                }
            }
    }

    
}
</style>