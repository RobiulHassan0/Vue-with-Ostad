import AboutView from "@/views/AboutView.vue"
import HelloWorld from "@/views/HelloWorld.vue"
import LoginView from "@/views/LoginView.vue"
import SecretView from "@/views/SecretView.vue"
import { createRouter, createWebHistory } from "vue-router"



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/secret',
            name: 'secret',
            component: SecretView
        }
    ]
})

export default router