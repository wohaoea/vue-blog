// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap3.3.7/css/bootstrap.min.css'
import './assets/bootstrap3.3.7/js/bootstrap.min'
import './assets/js/rem'
import './assets/css/common.css'
import './assets/css/index.css'
import './assets/css/target.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})