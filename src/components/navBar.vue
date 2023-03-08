<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const pathName=route.path
const props=defineProps({
   isShow:{
    type:Boolean,
    default:false
   }
})
const emit = defineEmits(['getbol'])
const goPopUps = () => {
    console.log('nav');
    
    emit('getbol', true)
}
</script>
<template>
    <div class="navBar">
        <div class="setting">
            <i v-if="route.path === '/'" class="icon-sousuo iconfont"></i><i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
        <div class="title">
            <span>{{ route.path == '/' ? '全部笔记' : '代办' }}</span><i v-if="route.path === '/'"
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