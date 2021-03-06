import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

import AskHome  from '../components/askHome'
import Login  from '../components/login/Login'
import Signup from '../components/login/Signup'
import Forum  from '../components/forum/Forum'
import Logout from '../components/login/Logout'
import Read   from '../components/forum/Read'
import Create   from '../components/forum/Create'
import CreateCategory   from '../components/category/CreateCategory'


const routes = [
    { path: '/' , component: AskHome  },
    { path: '/login' , component: Login  },
    { path: '/signup', component: Signup },
    { path: '/Logout', component: Logout },
    { path: '/question/:slug'  , component: Read   , name:'read' },
    { path: '/Ask'  , component: Create },
    { path: '/category'  , component: CreateCategory },
    { path: '/forum' , component: Forum  , name:'forum'}
  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history',
  })

  export default router