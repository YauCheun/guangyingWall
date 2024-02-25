<template>
    <div class="foot-bar">
        <div class="foot-bar-inner">
            <!--  -->
            <div class="foot-left">
                <div class="logo">
                <img src="@/images/logo.ico" alt="">
                <p class="logo-name">光影</p>
            </div>
            <div class="top-p">光影游戏社区</div>
            <div class="top-p">欢迎佬们加入</div>
            <!-- <div class="state"><span>作者：莽梦</span><span>QQ：3157199927</span></div> -->
            </div>
            <!--  -->
            <div class="link">
                <p class="title">链接</p>
                <div class="link-inner">
                    <a href="https://space.bilibili.com/336130356" target="_blank" class="link-name">作者B站</a>
                    <a href="https://github.com/15715558546" target="_blank" class="link-name">网站公告</a>
                </div> 
            </div>
            <!--  -->
            <div class="foot-right">
                <div class="text">
                    <p class="text1">光影的群聊</p>
                    <p class="text2">群号: 11111111</p>
                </div>
                <div class="qq">
                    <!-- <div><img src="@/images/qq.jpg" alt=""></div>       -->
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.foot-bar{
    // position: fixed;
    // bottom: 0;
    width: 100%;
    height: 200px;
    background: @gray-1;
    box-sizing: border-box;
    margin-top: 40px;
    display: flex;
    align-items: center;
    .foot-bar-inner{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        p{
            color:rgba(255,255,255,0.5)
        }
    }
    .foot-left{
        .logo{
            display: flex;
            margin-bottom: 24px;
            align-items: center;
            .logo-name{
                font-size: 20px;
                color: @gray-10;
                font-weight: 600;
                margin-left: 10px;
            }
        }
        .top-p{
            font-size: @size-12;
            padding-bottom: 4px;
            width: 400px;
            color:rgba(255,255,255,0.5);
        }
        .state{
            font-size: @size-12;
            padding-top: 26px;
            color:rgba(255,255,255,0.5);
            span{
                padding-right: 20px;
            }
        }
    }
    .link{
        padding: 0 40px;
        flex:1;
        margin-bottom: 24px;
        .title{
            margin-bottom: 24px;
        }
        .link-inner{
            a{
                color:rgba(255,255,255,0.5);
                padding-right: 20px;
                font-size: @size-12;
            }
        }
    }
    .foot-right{

            display: flex;
            .text{
                font-size: @size-12;
                .text1{
                    margin-bottom: 24px;
                }
            }
            img{
                width: 150px;
                height: 150px;
                padding-left: 40px;
            }
        
    }
}
</style>