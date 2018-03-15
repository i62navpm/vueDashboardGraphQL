import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/views/Home'
import ProjectForm from '@/components/views/ProjectForm'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/project/:projectId?',
      component: ProjectForm,
      name: 'projectForm',
    },
  ],
})

export default router
