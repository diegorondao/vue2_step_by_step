import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})
