import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../view/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../view/about.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../view/menu.vue')
    },
    {
      path: '/joinmenu',
      name: 'joinmenu',
      component: () => import('../view/joinmenu.vue')
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: () => import('../view/createAccount.vue')
    },
  ]
})

export default router
