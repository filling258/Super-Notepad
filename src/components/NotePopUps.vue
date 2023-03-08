<script setup lang='ts'>
import { ref, watch } from 'vue'
import { noteBook, cover } from '../store';
import { go } from '../publicFn';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const coverStore = cover()
const noteBookStore = noteBook()
const show = ref(false)
const currentIndex=noteBookStore.noteBookList.findIndex(item=>item.randomId===Number(route.params.id))
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    }
})
const updateShow = (newValisShow: boolean) => {
    show.value = newValisShow
}
const goNewNote = (index: number) => {
    const id = noteBookStore.noteBookList[index].randomId
    router.push({ path: `/NoteBook/${id}` })
}
const emit = defineEmits(['getbol'])
const goPopUps = (newValshow: boolean) => {
    show.value = newValshow
    emit('getbol', false)
}
watch([() => props.isShow, show], ([newValisShow, newValshow], [oldValisShow, oldValShow]) => {
    if (newValisShow !== oldValisShow) {
        updateShow(newValisShow)
    }
    if (newValshow !== oldValShow && newValshow === false) {
        goPopUps(newValshow)
    }
})
const Private = () => {
    alert('此功能未上线')
}
</script>
<template>
    <div class="notebook">
        <van-action-sheet v-model:show="show" title="笔记本">
            <div class="content">
                <div @click="go('/NewlyBuilt')">
                    <div>
                        <div><i class="icon-jiahao_o iconfont"></i></div>
                    </div>
                    <p>新建笔记</p>
                </div>
                <div @click="go('/')">
                    <div  :class="{ 'selectBoder': route.params.id === undefined }"><img src="./../assets/images/black_03.jpg" alt=""></div>
                    <p>全部笔记</p>
                    <em>0</em>
                </div>
                <div v-for="(item, index) in noteBookStore.noteBookList" :key="index" @click="goNewNote(index)">
                    <div :class="{ 'selectBoder': index === currentIndex }"><img
                            :src="coverStore.imgUrl[item.selectIndex].url" alt=""></div>
                    <p class="van-ellipsis">{{ item.text }}</p>
                    <em>{{ item.num }}</em>
                </div>
            </div>
            <div class="remove">
                <div @click="Private"><i class="icon-simi iconfont"></i><span>私密笔记</span><i
                        class="icon-jinrujiantou iconfont"></i></div>
                <div @click="go('/10000000')"><i class="icon-shanchu iconfont"></i><span>最近删除</span><i
                        class="icon-jinrujiantou iconfont"></i></div>
            </div>
        </van-action-sheet>
    </div>
</template>
<style scoped lang='scss'>
.content {

    @include flex(start, center, row, wrap);
    overflow: hidden;
    padding: .18rem .18rem 1.6rem;

    &>div {
        width: 1.1rem;
        height: 2.2rem;
        margin-top: .15rem;
        margin-right: .16rem;
        &>div {
            width: 100%;
            height: 70%;
            box-sizing: border-box;
            padding: .04rem;
            border-radius: .05rem .14rem .14rem .05rem;
           
            &>div {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border-radius: 0 .1rem .1rem 0;
                padding: .56rem 0 0 .37rem;
                background: #f0f0f0;

                &>i {
                    font-size: .28rem;
                }


            }

            &>img {
                width: 100%;
                height: 100%;
            }

        }
        .selectBoder {
                border: 3px solid #f9ba19;
            }
        &>p {
            width: 100%;
            line-height: .07rem;

        }
    }
}

.remove {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.3rem;
    border-top: 1px solid #ccc;
    background: #fff;
    z-index: 999;
    display: flex;
    flex-direction: column;

    &>div {
        flex: 1;
        padding: .15rem 0 0 .15rem;
        padding-top: .15rem;

        span,
        i {
            margin: 0 .05rem;
            font-size: .2rem;
        }

        span {
            margin-right: 2.3rem;
        }
    }
}</style>