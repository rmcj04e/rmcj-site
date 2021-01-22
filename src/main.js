import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from "vue-router";
import VueAwesome from "vue-awesome";
import router from '@/router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAwesome)

Vue.config.productionTip = false

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/link'
import 'vue-awesome/icons/brands/vk'
import 'vue-awesome/icons/brands/telegram'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/question-circle'
import 'vue-awesome/icons/brands/discord'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),router,
}).$mount('#app')
