<template>
    <div class="top-bar">
        <div class="logo">
            <img src="@/images/logo.ico" alt="">
            <p class="logo-name">光影</p>
        </div>
        <div class="menu">
            <Ibutton @click="changeWall(0)"  :active="id == 0 ? 'cprimary' : 'pncolor'" class="menu-message">留言墙</Ibutton>
            <Ibutton @click="changeWall(1)"  :active="id == 1 ? 'csecondary' : 'pncolor'" class="menu-photo">照片墙</Ibutton>
        </div>
        <div class="user">
            <!-- 昼夜 -->
            <div class="sun">
                <div class="img" @click="changeStyle"></div>
            </div>
            <div class="user-head">
                <img src="@/images/head.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Ibutton from './Ibutton.vue';
import { useRoute,useRouter } from 'vue-router';
import { Ref, ref } from 'vue';
// import { avatarUrl } from '@/utils/env';
const route = useRoute()
const router = useRouter()
const id  = ref(route.query.id) as Ref<number |string>
//切换
const changeWall = (e:number) => {
    id.value = e
    router.push({
        query : { id : e }
    })
}
const isDark = ref(false)
const store = localStorage.getItem('theme')
const goDark = () =>{
    document.body.classList.add('dark')
    localStorage.setItem('theme','dark')
    
}
if(store == 'dark'){
    goDark()
    
}

const changeStyle = () => {
    isDark.value =! isDark.value
    if(isDark.value==true){
        goDark()
        isDark.value = true;
    }else{
        document.body.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
}
</script>
<style lang="less" scoped>
.top-bar{
    width: 100%;
    height: 60px;
    // background: rgba(255,255,255,0.80);
    // background: #444;
    // background:rgba(18,18,18,0);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    .logo{
        display: flex;
        align-items: center;
        width: 200px;
        .logo-name{
            font-size: 20px;
            color: @gray-1 ;
            font-weight: 600;
            padding-left: 10px;
        }
    }
    .menu{
        display: flex;
        .menu-message{
            margin-right: 24px;
        }
    }
    .add{
        position: fixed;
        right: 100px;
        top: 20px;
    }
    .user{
        width: 200px;
        display: flex;
        justify-content: flex-end;
        .sun{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .img{
                height: 36px;
                width: 36px;
                cursor: pointer;
                background-image: url("@/images/sun.png");
                border-radius: 50%;
                background-size: 100% 100%;
            }   
        }
        .user-head{
            float: right;
            border-radius: 50%;
            height: 36px;
            width: 36px;
            cursor: pointer;
            
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
}


</style>