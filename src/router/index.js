import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import mainapp from '@/components/app'
import test from '@/components/tes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainapp',
      component: mainapp
    },
    {
      path: '/testing',
      name: 'test',
      component: test
    }
  ]
})
