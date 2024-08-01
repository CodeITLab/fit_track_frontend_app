import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import {useUserStore} from "@/store/userStore";
import ApiController from "@/controllers/ApiController";
import ModalManager from "@/controllers/ModalManagerController";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    beforeEnter: async (to, from, next) => {
      const authFlag = localStorage.getItem("isAuth");
      const email = localStorage.getItem('email') || '';
      await ApiController.fetchUserByEmail(email);
      await ApiController.fetchData();

      if (useUserStore().getUserData.userType === '') {
        ModalManager().UpdateCurrentModalValue('userTypeModal', true);
      }

      if (from.path === "/" && authFlag !== null) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
