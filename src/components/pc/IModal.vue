<template>
    <!-- 点加号后 -->
    <transition name="modal">
        <div class="i-modal" v-if="props.isModal">
            <div class="i-modal-head">
                <p class="modal-name">{{ title }}</p>
                <span class="iconfont icon-guanbi" @click="closeModal"></span>
            </div>
            <div class="i-modal-main">
                <slot ></slot>
            </div>
        </div>
    </transition>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        default: '留言墙'
    },
    isModal: {
        default: false
    }
})
const emits = defineEmits(['close'])
const closeModal = () => {
    emits('close')
}

</script>

<style lang="less" scoped>
.modal{
    &-enter{
        &-from{
            transform: translateY(360px);
        }
        &-active{
            transition: all 0.2s easy-out;
        }
        &-to{
            transform: translateY(0px);
        }
    }
    &-leave{
        &-from{
            transform: translateY(0px);
        }
        &-active{
            transition: all 0.1s easy-in;
        }
        &-to{
            transform: translateY(300px);
        }
    }
}
.i-modal {
    overflow: hidden;
    width: 720px;
    height: 550px;

    //fixed元素水平居中
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;

    top: 20%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    box-sizing: border-box;
    transition: @tr;
    border-radius: 5px;
    .i-modal-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: @padding-20;
        box-sizing: border-box;
        .modal-name {
            font-size: 16px;
            color: @gray-1;
            font-weight: 600;
        }
        .icon-guanbi {
            cursor: pointer;
            padding-left: 8px;

            color: #F67770;
            // height: 24px;
            // width: 24px;
        }
    }
    .i-modal-main{
        height: 100%;
        overflow-y: auto;
        padding-bottom: 116px;
        box-sizing: border-box;
        overflow-x: auto;
        margin: 2px;
    }
    // .i-modal-main::-webkit-scrollbar{
    //     width: 4px;
    //     height: 4px;
    // }

    // .i-modal-main::-webkit-scrollbar-thumb{
    //     border-radius: 4px;
    //     background: rgba(0,0,0,0.2);
    // }
    // .i-modal-main::-webkit-scrollbar-track{
    //     border-radius: 4px;
    //     background: rgba(0,0,0,0);
    // }
}
</style>