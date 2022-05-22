import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import HomePage from '@/views/HomePage.vue'
import Test from '@/views/Test.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/log' },
    { path: '/log', component: Login },
    { path: '/reg', component: Register },
    { path: '/home', component: HomePage },
    { path: '/test', component: Test },
]

const router = new VueRouter({
    routes
})

export default router