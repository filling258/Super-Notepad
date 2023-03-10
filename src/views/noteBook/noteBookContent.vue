<script setup lang='ts'>
import { useRoute } from 'vue-router';
import {note} from './../../store'
import { go } from '../../publicFn';
import router from '../../router';
const route=useRoute()
const noteStore=note()
const isHome=route.path==='/' ? true : false;
const homeContentList=noteStore.noteList[0].data
const contentList=isHome===true ? homeContentList : noteStore.noteList.find(item=>item.contentId===Number(route.params.id))?.data
const goNewNote=()=>{
    if(!isHome){
        router.push({path: '/NewNote',query: { contentId: Number(route.params.id)}})
    }else {
        router.push({path: '/NewNote',query: {contentId: 10000000}})
    }
    
}
const btn=()=>{ 
    console.log(contentList);
    
}
</script>
<template>
<div class="content">
    <button @click="btn">dianji </button>
    <div class="card" v-for="(item,index) in contentList || null" :key="index">
      {{ item.title }}
      {{ item.content }}
    </div>
    <div class="fixed" @click="goNewNote()"><i class="iconfont icon-jiahao_o"></i></div>
</div>
</template>
<style scoped lang='scss'>
.content{
    .fixed{
        position: fixed;
        bottom: .85rem;
        right: .25rem;
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 100%;
        background: #ffbb0e;
        text-align: center;
        i{
           line-height: .65rem;
           font-size: .3rem;
           color: #fff;
        }
    }
}
</style>