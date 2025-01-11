import { createRouter, createWebHistory } from 'vue-router'
import TodoItem from '../views/TodoItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/content/:id',
      component: TodoItem,
    },
  ],
})

export default router
