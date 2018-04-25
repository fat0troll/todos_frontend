import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'vue-cookie'
import StartPage from '@/components/StartPage'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import Logout from '@/components/Logout'
import TodosList from '@/components/TodosList'
import TasksList from '@/components/TasksList'

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
      path: '/register',
      name: 'RegisterForm',
      component: RegisterForm
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/todos',
      name: 'TodosList',
      component: TodosList
    },
    {
      path: '/todos/:todo_id',
      name: 'TasksList',
      component: TasksList
    }
  ]
})
