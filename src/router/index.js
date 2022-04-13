import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Main from "@/router/Main";
import Gallery from "@/router/Gallery";
import notePage from "@/router/NotePage";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/note/:id',
        component: notePage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
