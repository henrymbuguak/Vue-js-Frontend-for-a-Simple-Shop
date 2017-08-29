import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/signin",
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/signup",
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/products/create",
      component: require('./components/product/Create.vue'),
      meta: {
        forAuth: true
      }
    },
    {
      path: "/products/:product/edit",
      component: require('./components/product/Edit.vue'),
      meta: {
        forAuth: true
      }
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})

export default router
