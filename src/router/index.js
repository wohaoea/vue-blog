import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Router from 'vue-router'
import Home from '@/components/home'
import Target from '@/components/target'
import Header from '@/components/header'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: '/',
            component: Header
        }]
    }, {
        path: '/target',
        name: 'target',
        component: Target,
        children: [{
            path: '/target',
            component: Header
        }]
    }],
    components: {
        swiper,
        swiperSlide
    }
})