/*
 * @Description: 
 * @Autor: anlythree
 * @Date: 2020-11-21 13:33:23
 * @LastEditors: anlythree
 * @LastEditTime: 2020-11-21 13:46:28
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'main',
            component: () => import('@/views/home.vue')
        }
    ]
})