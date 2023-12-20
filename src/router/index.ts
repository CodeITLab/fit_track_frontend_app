import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useUserDataStore } from '@/store/UserData';
import { useWorkoutDataStore } from '@/store/WorkoutData';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { 
            roles: ['admin'] 
        },
        beforeEnter: (to, from, next) => {
            const workout = useWorkoutDataStore();
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
