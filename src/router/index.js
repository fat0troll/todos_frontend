import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'vue-cookie'
import StartPage from '@/components/StartPage'
import LoginForm from '@/components/LoginForm'
import Logout from '@/components/Logout'

Vue.use(Router)
Vue.use(Cookies)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
