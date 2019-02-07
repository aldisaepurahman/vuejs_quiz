import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Componentla from '@/components/Componentla'
import User from '@/components/User'
import Soal from '@/components/Soal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components1',
      name: 'Componentla',
      component: Componentla
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/soal',
      name: 'Soal',
      component: Soal
    }
  ]
})
