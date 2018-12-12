import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/index.vue'
import Home from '../views/Home/index.vue'
import FAQ from '../views/FAQ/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'faq',
          component: FAQ,
        }
      ]
    },
  ]
})
