import { createRouter, createWebHistory } from 'vue-router'
import TodoItem from '../views/TodoItem.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/content/:id',
      component: TodoItem,
    },
  ],
})

export default router
