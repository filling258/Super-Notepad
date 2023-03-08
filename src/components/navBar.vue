<script setup lang="ts">
import { useRoute } from 'vue-router';
import {currentPath} from './../publicFn'
import { noteBook } from '../store';
const noteBookStore=noteBook()
const route = useRoute()
const data=currentPath(route.path)
const title=()=>{
    if(data!=='全部笔记'&& data!=='代办'){
       return (noteBookStore.noteBookList.find(item=>item.randomId===data)?.text)   
    }else{
        return data
    }
}
const props=defineProps({
   isShow:{
    type:Boolean,
    default:false
   }
})
const emit = defineEmits(['getbol'])
const goPopUps = () => {
    emit('getbol', true)
}
</script>
<template>
    <div class="navBar">
        <div class="setting">
            <i v-if="route.path === '/'" class="icon-sousuo iconfont"></i><i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
        <div class="title">
            <span class="van-ellipsis">{{ title() }}</span><i
               class="iconfont" :class="isShow=== false ? 'icon-xiajiantou' : 'icon-shangjiantou'" @click="goPopUps"></i>
            <p>0项代办</p>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.navBar {
    width: 100%;
    height: 1.4rem;
    background: pink;

    .setting {
        width: 100%;
        height: .5rem;
        @include flex(end, center);

        i {
            margin: 0 .08rem;
            font-size: .2rem;
        }
    }

    .title {
        span {
            font-size: .39rem;
            font-weight: 300;
            margin-right: .1rem;

        }

    }
}</style>