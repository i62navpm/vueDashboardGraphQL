import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home-view" */ '@/components/views/Home'),
      name: 'home',
    },
    {
      path: '/project/:projectId?',
      component: () =>
        import(/* webpackChunkName: "projectForm-view" */ '@/components/views/ProjectForm'),
      name: 'projectForm',
    },
  ],
})

export default router
