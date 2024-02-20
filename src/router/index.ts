import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import { UserAuthController } from '@/controllers/auth-controllers/UserAuthController';
import { login } from '@/services/GoogleLogins';
import { useUserDataStore } from '@/store/UserData';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { roles: ['admin'] },
        beforeEnter: (to, from, next) => {
       
          const authFlag = localStorage.getItem('isAuth');
        
          if(from.path === '/' && authFlag !== null) {
            next();
          } else {
            alert("You are not authenticated");
            next('/');
            console.log(authFlag)
          } 
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: DashboardView
    // () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
