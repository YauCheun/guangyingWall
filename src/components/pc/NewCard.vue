<template><!-- 新建卡片 -->
    
    <div class="new-card">

        <!-- 照片 -->

        <div class="add-photo" v-if="id == 1">
            <input type="file" name="file" id="file" multiple="true" @change="showPhoto">
            <div class="add-bt" v-if="url == ''">
                <span class="iconfont icon-tianjia"></span>
            </div>
            <div class="change-bt" v-if="url != ''">
                <span class="iconfont icon-xiugai"></span>
            </div>
            <div class="photo-div" v-show="url!=''"><img :src="url"></div>
        </div>

        <!-- 卡片 -->

        <div class="colors" v-show="id == 0">
            <p class="color-item" v-for="(e, index) in cardColorBlock" :key="index" :style="{ background: e }"
                @click="changeColor(index)" :class="{ colorselected: index == colorSelected }"></p>
        </div>

        <div class="card-main" :style="{ background: id == 0 ? cardColor[colorSelected] : cardColor[5] }">
            <textarea placeholder="留言..." class="message" maxlength="96" v-model="message"></textarea>
            <input type="text" placeholder="签名" class="name" v-model="name" />
        </div>
        <div class="labels">
            <p class="title">发帖分区</p>
            <div class="label" @click="">
                <p v-for="(e, index) in label[id]" :key="index" class="label-item"
                    :class="{ labelselected: index == labelSelected }" @click="changeLabel(index)">{{ e }}</p>
            </div>
        </div>
        <div class="btn">
            <Ibutton size="one" active="secondary" @click="closeModal">丢弃</Ibutton>
            <Ibutton size="one" class="sbumit" @click="submit">确定</Ibutton>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from "@/store/index";;
import { ref, getCurrentInstance } from 'vue';
import {
    cardColor,// 输入卡片背景色
    cardColorBlock, //颜色块
    label //标签
} from '@/utils/data.js'
import { getObjectURL } from '@/utils/methods.js'
// import { insertWallApi, proFileApi } from '@/api/index'
import Ibutton from './Ibutton.vue';
//@ts-ignore 获取当前组件实例
const { appContext } = getCurrentInstance();
// @ts-ignore
const globalProxy = appContext.config.globalProperties;
const store = useStore()
//图片链接
var url = ref('')
//留言内容
const message = ref('')
//签名
const name = ref('')
//当前选择颜色
const colorSelected = ref(0)
//当前选中标签
const labelSelected = ref(0)
//当前IP
const user = store.user
// 切换颜色
const changeColor = (e:number) => {
    colorSelected.value = e
}
// 切换标签
const changeLabel = (e:number) => {
    labelSelected.value = e
}
//关闭窗口
const emits = defineEmits(['closeModal', 'clickbt'])
const closeModal = (data:any) => {
    emits('closeModal', data)
}
const props = defineProps({
    id: {
        default: 0
    }
})
const submit = () => {
    let names = '匿名'
    if (name.value) {
        names = name.value
    }
    let data = {
            type: props.id,
            message: message.value,
            name: names,
            userId: user.id,
            moment: new Date(),
            label: labelSelected.value,
            color: 5,
            imgurl: ''
        }
    if (message.value && props.id == 0) {
        
        data.color = colorSelected.value
        // insertWallApi(data).then(res => {
        //     let cardD = {
        //         type: props.id,
        //         message: message.value,
        //         name: names,
        //         userId: user.id,
        //         moment: new Date(),
        //         label: labelSelected.value,
        //         imgurl: '',
        //         id : res.message.insertId,
        //         islike: [{ count: 0 }],
        //         like: [{ count: 0 }],
        //         comcount: [{ count: 0 }],
        //         report: [{ count: 0 }],
        //         revoke: [{ count: 0 }],
        //         color: colorSelected.value

        //     }
        //     message.value = ''
        //     emits('clickbt', cardD)
        //     globalProxy.Modal({ type: 'success', message: '感谢您的记录' })
        // })

    } else if (props.id == 1 && url.value) {
        updatePhoto(data)
    }
}
//图片展示
const showPhoto = () => {
    // @ts-ignore
    let aa = getObjectURL(document.getElementById('file').files[0])
    url.value = aa
}
//图片提交
const updatePhoto = (data: { type?: number; message?: string; name: any; userId?: string; moment?: Date; label?: number; color?: number; imgurl: any; }) => {
    let file:any = document.getElementById('file')
    console.log(data)
    if (file.files.length > 0) {
        let formData = new FormData()
        formData.append('file', file.files[0])
        // proFileApi(formData).then(res => {
        //     data.imgurl = res
        //     insertWallApi(data).then(result => {
        //         let cardD = {
        //             type: props.id,
        //             message: message.value,
        //             name: data.name,
        //             userId: user.id,
        //             moment: new Date(),
        //             label: labelSelected.value,
        //             color: 5,
        //             imgurl: res,
        //             id : result.message.insertId,
        //             islike: [{ count: 0 }],
        //             like: [{ count: 0 }],
        //             comcount: [{ count: 0 }],
        //             report: [{ count: 0 }],
        //             revoke: [{ count: 0 }],
        //             color: colorSelected.value
        //         }
        //         message.value = ''
        //         emits('clickbt', cardD)
        //         globalProxy.Modal({ type: 'success', message: '感谢您的记录' })
        //     })
        // })
    }
}
</script>
<style lang="less" scoped>
.new-card {
    padding: 0 20px;
    position: relative;
    // height: 100px;
    // background: red;
    .colors {
        display: flex;
        align-items: center;
        padding-bottom: @padding-12;

        .color-item {
            width: 24px;
            height: 24px;
            margin-right: @padding-8;
            border: 1px solid transparent;
            cursor: pointer;
        }

        .colorselected {
            border: 1px solid @primary-color;
        }
    }

    .card-main {
        position: relative;
        height: 200px;
        width: 100%;
        background: rgba(252, 175, 162, 0.31);
        padding: @padding-12;
        box-sizing: border-box;
        transition: @tr;

        .message {
            background: none;
            border: none;
            resize: none;
            height: 130px;
            width: 100%;
            padding: @padding-8;
            box-sizing: border-box;
            font-size: 15px;
        }

        .name {
            width: 100%;
            // width: 10px;
            line-height: 20px;
            box-sizing: border-box;
            padding: @padding-8;
            background: none;
            border: 1px solid #fff;
            font-size: 15px;
        }
    }

    .title {
        color: @gray-1;
        font-weight: 600;
        padding-top: 20px;
    }

    .label {
        display: flex;
        flex-wrap: wrap;
        // width: 320px;
        cursor: pointer;

        .label-item {
            padding: 2px 10px;
            border-radius: 20px;
            margin: 16px @padding-4 0 0;
            color: @gray-2 ;
            transition: @tr;
        }

        .labelselected {
            background: #EBEBEB;
            font-weight: 600;
            color: @gray-1 ;
        }
    }

    .mzsm {
        padding-top: 10px;
        font-size: 12px;
        color: @gray-3;

    }

    .btn {
        position: fixed;
        display: flex;
        padding: @padding-20 ;
        box-sizing: border-box;
        left: 0;
        bottom: 40px;
        // background: rgba(255, 255, 255, 0.4);
        // width: 100%;
        // backdrop-filter: blur(10px);
        height: 40px;
        border-radius: 24px;
        .sbumit {
            margin-left: 480px;

        }
    }

    .add-photo {
        padding-bottom: 20px;
        position: relative;

        #file {
            position: absolute;
            z-index: 10;
            top: -10;
            height: 74px;
            width: 64px;
            opacity: 0;
            cursor: pointer;
        }

        .add-bt {
            width: 64px;
            height: 64px;
            border: 1px solid @gray-3;
            border-radius: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .icon-tianjia {
            font-size: 24px;
        }

        .photo-div {
            max-height: 100%;
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .change-bt {
            position: absolute;
            top: 12px;
            left: 12px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon-xiugai {
                color: #fff;
            }
        }

    }



}
</style>