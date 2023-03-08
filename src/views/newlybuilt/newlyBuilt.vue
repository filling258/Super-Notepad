<script setup lang='ts'>
import { ref } from 'vue'
import router from './../../router'
import { cover ,noteBook } from './../../store'
import { goBack } from '../../publicFn';
const coverStore = cover()
const notebookStore=noteBook()
const selectIndex = ref(0)
const text = ref('')
const selectCover = (i: number) => {
    selectIndex.value = i
}
const goNewNote = (selectIndex: number,text: string,  num: number = 0) => {
    const randomId = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
   notebookStore.addNoteBook({randomId, selectIndex,text,num})
    router.push({ path: `/noteBook/${randomId}` })
}
</script>
<template>
    <div class="newlyBuilt">
        <div class="navBar">
            <i class="icon-shanchu1 iconfont" @click="goBack"></i><span>新建笔记本</span><i class="icon-duihao_o iconfont"
                @click="goNewNote( selectIndex,text)"></i>
        </div>
        <div class="content">
            <div class="title"><input type="text" placeholder="输入笔记本名称" v-model="text"></div>
            <div class="cover">
                <img :src="coverStore.imgUrl[selectIndex].url" alt="">
            </div>
        </div>
        <div class="selectCover">
            <p>选择封面</p>
            <van-swipe :loop="false" :width="100" :height="200" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in coverStore.imgUrl" :key="item"
                    :class="{ 'selectBoder': index === selectIndex }" @click="selectCover(index)"><img :src="item.url"
                        alt=""></van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.navBar {
    display: flex;
    flex-direction: row;
    height: 0.5rem;
    align-items: center;
    i {
        flex: 1;
        text-align: center;
        font-size: .29rem;
    }

    span {
        flex: 4;
        font-size: .24rem;
    }
}

.content {
    .title {
        width: 1.8rem;
        height: 0.4rem;
        border-bottom: 2px solid #000;
        margin: 1.1rem auto 0;

        input {
            width: 97%;
            height: 97%;
            caret-color: #f9ba19;
            font-size: .24rem;
            border: 0;
        }
    }

    .cover {
        width: 2.2rem;
        height: 3rem;
        margin: .6rem auto;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.selectCover {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: .2rem;

    .van-swipe {

        // height: 2rem;
        overflow-x: auto;

        .van-swipe-item {
            margin-right: .2rem;
            box-sizing: border-box;
            padding: .04rem;

            border-radius: .05rem .14rem .14rem .05rem;

            img {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border-radius: 0 .1rem .1rem 0;
            }
        }

        .selectBoder {
            border: 3px solid #f9ba19;
        }

    }
}</style>