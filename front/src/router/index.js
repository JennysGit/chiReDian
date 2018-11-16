import Vue from 'vue'
import Router from 'vue-router'
import Deposit from '@/components/Deposit/Deposit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Deposit',
      component: Deposit
    }
  ]
})
