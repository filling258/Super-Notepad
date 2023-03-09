<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import {note} from './../../store'
import { goBack } from '../../publicFn';
import {getTime} from './../../publicFn'
import router from '../../router';
const route=useRoute()
const noteStore=note()
const show = ref(false)
const content = ref('')
const title=ref('')
const getFocus = () => {
    show.value = true
}
const Id=Number(route.query.contentId)


const submit=(Id: number,title:string,content:string)=>{
    const data={title: title,content: content}
    noteStore.updateNoteList(Id,data)
}
const gosubmit=()=>{
    submit(Id,title.value,content.value)
    router.back()
}

</script>
<template>
    <div class="header">
        <div class="left"><i v-if="!show" class="iconfont icon-shanchu1" @click="goBack"></i><i v-else="show"
                class="iconfont icon-zuojiantou" @click="gosubmit()"></i></div>
        <div class="center"></div>
        <div class="right"><i class="iconfont icon-fenxiang"></i><i class="iconfont icon-gengduo-shuxiang"></i><i
                v-if="show" class="iconfont icon-duihao_o"></i></div>
    </div>
    <div class="time"><span>{{getTime().M}} / {{getTime().D}} {{  getTime().h}}:{{getTime().m  }}</span>&nbsp;&nbsp;| &nbsp;&nbsp;<span>{{content.length || 0}}</span>字</div>
    <input type="text" placeholder="标题" v-model="title">
    <textarea class="textarea" contenteditable="true" draggable="false" maxlength="30000" rows="45" @focus="getFocus()"
        v-model="content"></textarea>
</template>
<style scoped lang='scss'>
.header {
    width: 100%;
    height: 0.5rem;
    background: pink;
    display: flex;
    flex-direction: row;
    align-items: center;

    .left {
        // position: relative;
        flex: 1;
        text-align: center;
        background: blue;

        
    }

    .center {
        flex: 3;
    }

    .right {
        flex: 3;
        background: seashell;
        display: flex;

        i {
            flex: 1;
            text-align: center;
        }
    }
}

.time {
    width: 100%;
    height: 0.2rem;
}

input {
    box-sizing: border-box;
    width: 100%;
    height: .5rem;
    border: none;
    outline: none;
}

.textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
}</style>