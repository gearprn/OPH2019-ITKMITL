import Vue from 'vue'
import Router from 'vue-router'

import index from './views/Index.vue'
import InfoNetSec from './views/infoNetsec.vue'
import InfoEsport from './views/infoEsport.vue'
import InfoData from './views/infoData.vue'
import InfoPhp from './views/infoPhp.vue'
import schedule from './views/schedule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detailsNetsec',
      name: 'InfoNetSec',
      component: InfoNetSec,
    },
    {
      path: '/detailsEsport',
      name: 'InfoEsport',
      component: InfoEsport,
    },
    {
      path: '/detailsData',
      name: 'InfoData',
      component: InfoData,
    },
    {
      path: '/detailsPhp',
      name: 'InfoPhp',
      component: InfoPhp,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
    },
  ]
})
