import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:token?',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/questionnaries',
      name: 'questionnaries',
      component: () => import('../views/Questionnaries.vue')
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('../views/Files.vue')
    },
    {
      path:'/not-found',
      name:'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) =>{
    const token = localStorage.getItem('token') ?? null;
    if (to.matched.length < 1) return next({name:'not-found'});
    if(!['not-found','home'].includes(to.name.toLowerCase()) && !token) return next({name:'not-found'})
     
    return next();
})



export default router
