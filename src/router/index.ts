import { createRouter, createWebHistory } from 'vue-router'
import ContactPage from '../views/Contact.vue'
import HomePage from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})

export default router
