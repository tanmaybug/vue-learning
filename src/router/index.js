import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactUs from '../pages/ContactUs.vue'
import UserTable from '../pages/UserTable.vue'
import UserForm from '../pages/UserForm.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'about',
                component: AboutUs
            },
            {
                path: 'contact',
                component: ContactUs
            },
            {
                path: 'user',
                component: UserTable
            },
            {
                path: 'Form',
                component: UserForm
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router