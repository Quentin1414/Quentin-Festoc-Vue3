import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/TheMainView.vue'
import MonstresView from '../components/TheMonstresView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/les monstres',
      name: 'LES MONSTRES',
      component: MonstresView
    }
  ]
})

export default router
