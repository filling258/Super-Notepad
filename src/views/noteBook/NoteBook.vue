<script setup lang='ts'>
import { ref,watch } from 'vue';
import NavBar from '../../components/navBar.vue';
import noteBookContent from './noteBookContent.vue'
import NotePopUps from '../../components/NotePopUps.vue';
import TabBar from '../../components/tabBar.vue';
const isShow = ref(false)
const changeMessage = (bol: boolean) => {
    isShow.value = bol  
}
</script>
<template>
    <NavBar @getbol="changeMessage" :isShow="isShow" />
    <noteBookContent/>
    <NotePopUps @getbol="changeMessage" :isShow="isShow"/>
    <TabBar />
</template>
<style scoped lang='scss'></style>