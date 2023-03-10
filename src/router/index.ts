import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from './../views/Layout.vue'
const routes = [
    {
        path: '/',
        component: Layout,
    },
    {
        path: '/NoteBook/:id',
        component: () => import("./../views/noteBook/NoteBook.vue")
    }, 
    {
        path: '/Agent',
        component: () => import("./../views/agent/Agent.vue")
    }, {
        path: '/NewNoteBook',
        component: () => import("../views/newlybuilt/newNoteBook.vue")
    },{
        path: '/NewNote',
        component:()=> import("./../views/newlybuilt/newNote.vue")
    }
]


const router = createRouter({
    // 使用hash的路由模式
    history: createWebHashHistory(),
    routes,
})
export default router