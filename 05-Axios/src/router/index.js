import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosApi from '@/components/AxiosApi'
import AxiosApiGitHub from '@/components/AxiosApiGitHub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Api',
      name: 'AxiosApi',
      component: AxiosApi
    },
    {
      path: '/Api/gitHub',
      name: 'AxiosApiGitHub',
      component: AxiosApiGitHub
    }
  ]
})
