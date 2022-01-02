import Vue from 'vue'
import VueRouter from 'vue-router'
//페이지 추가
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router