<script lang="ts" setup>
import ModalManager from "@/controllers/ModalManagerController";
import { useMenuStore } from "@/store/menuStore";
import {onBeforeMount, ref} from "vue";
import {useDashboardStore} from "@/store/dashboardStore";

const isMobile = ref(false);

const updateCurrentDashboardView = (dashboardView: string) => {
  useDashboardStore().setCurrentDashboardView(dashboardView);
}

const checkMobileMenuValue = () => {
  if(useMenuStore().getMobileMenuValue) {
    useMenuStore().updateMobileMenuState(false);
  }
}

onBeforeMount(() => {
  checkMobileMenuValue();
  screen.width <= 768 ? isMobile.value = true : isMobile.value = false;
});

</script>

<template>
  <nav :class="{ 'mobile-menu': useMenuStore().getMobileMenuValue }">
    <div class="container-fluid">
      <div class="side-menu">
        <ul class="side-menu-items">
          <li class="menu-item logo">
            <p>Fitness <span class="highlighted">And</span> Tracking</p>
          </li>
          <li class="menu-item home active" @click="updateCurrentDashboardView('workouts')">
            <img
                width="25"
                src="../../assets/img/icons/dashboard/report.png"
                alt=""
            />
            Vježbe
          </li>
          <li class="menu-item analytics" @click="updateCurrentDashboardView('analytics')">
            <img width="25" src="../../assets/img/icons/dashboard/analytics.png" alt="" />
            Analitika
          </li>
          <li class="menu-item help">
            <img width="25" src="../../assets/img/icons/dashboard/help.png"
                 alt="">
            Pomoć
          </li>
          <li class="menu-item" v-if="useMenuStore().getMobileMenuValue">
            <button @click="useMenuStore().updateMobileMenuState(false)">
              <img width="25" src="../../assets/img/icons/left-arrow.png"
                   alt="close-modal-arrow">
            </button>
          </li>
        </ul>
        <ul class="side-menu-items">
          <li class="menu-item settings">
            <img width="25" src="../../assets/img/icons/dashboard/settings.png"
                 alt="">
            Postavke
          </li>
          <li class="menu-item logout" @click="
                ModalManager().UpdateCurrentModalValue('logoutModal', true)
              ">
            <img width="25" src="../../assets/img/icons/dashboard/logout.png"
                 alt="">
            Odjava
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/menu-components/side-bar-nav.css";
</style>
