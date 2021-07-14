import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import Routes from './Routes'
import VueRouterBackButton from 'vue-router-back-button'
import {store} from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const bus = new Vue();
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(VueRouterBackButton, { router })

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),

  router: router
})
