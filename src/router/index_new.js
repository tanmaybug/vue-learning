// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const routes = [
    {
        path: '/',
        component: UserLayout,
        children: [
            { path: '', name: 'Home', component: () => import('../views/user/Home.vue') },
            { path: 'profile', name: 'Profile', component: () => import('../views/user/Profile.vue') }
        ]
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', name: 'AdminDashboard', component: () => import('../views/admin/Dashboard.vue') },
            { path: 'users', name: 'ManageUsers', component: () => import('../views/admin/Users.vue') }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
