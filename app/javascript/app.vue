<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import ActionCable from 'actioncable'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add()

Vue.component('font-awesome-icon', FontAwesomeIcon)

import SideMenu from 'components/modules/SideMenu.vue'
import GroupMessages from 'components/pages/GroupMessages.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const cable = ActionCable.createConsumer('wss:' + window.location.host + '/cable');
Vue.prototype.$cable = cable;

const router = new VueRouter({
  routes: [
    { path: '/',
      component: SideMenu },
    { path: '/groups/:id(\\d+)/messages',
      name: 'GroupMessages',
      component: GroupMessages }
  ]
})

// ref. https://jp.vuejs.org/v2/guide/plugins.html#%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AE%E4%BD%BF%E7%94%A8
Vue.use(VueRouter)
Vue.use(BootstrapVue)

export default {
  router
}
</script>

<style>
ul, li {
  list-style: none;
}

.nav-link {
  padding: 0!important;
}

.dropdown-toggle::after {
  color: white!important;
}
</style>