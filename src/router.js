import Vue from 'vue'
import Router from 'vue-router'

import index from './views/Index.vue'
import InfoNetSec from './views/infoNetsec.vue'
import InfoEsport from './views/infoEsport.vue'
import InfoData from './views/infoData.vue'
import InfoPhp from './views/infoPhp.vue'
import schedule from './views/schedule.vue'

import RegisNetSec from './views/regisNetsec.vue'
import RegisEsport from './views/regisEsport.vue'
import RegisData from './views/regisData.vue'
import RegisPhp from './views/regisPhp.vue'

import NetsecContestant from './views/ContestantNetsec.vue'
import PhpContestant from './views/ContestantPhp.vue'
import DataContestant from './views/ContestantData.vue'
import EsportContestant from './views/ContestantEsport.vue'


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
    {
      path: '/detailsNetSec/register',
      name: 'netsecregister',
      component: RegisNetSec,
    },
    {
      path: '/detailsEsport/register',
      name: 'esportregister',
      component: RegisEsport,
    },
    {
      path: '/detailsData/register',
      name: 'dataregister',
      component: RegisData,
    },
    {
      path: '/detailsPhp/register',
      name: 'phpregister',
      component: RegisPhp,
    },
    {
      path: '/detailsNetSec/contestant',
      name: 'netsecContestant',
      component: NetsecContestant,
    },
    {
      path: '/detailsPhp/contestant',
      name: 'phpContestant',
      component: PhpContestant,
    },
    {
      path: '/detailsData/contestant',
      name: 'dataContestant',
      component: DataContestant,
    },
    {
      path: '/detailsEsport/contestant',
      name: 'esportContestant',
      component: EsportContestant,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
