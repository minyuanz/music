import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/song',
            name: 'song',
            component: () => import('../views/Song.vue')
        }, {
            path: '/song/:id',
            name: 'songinfo',
            component: () => import('../views/SongInfo.vue')
        },
        {
            path: '/singer',
            name: 'singer',
            component: () => import('../views/Singer.vue')
        },
        {
            path: '/album',
            name: 'album',
            component: () => import('../views/Album.vue')
        }
    ]
})

export default router
