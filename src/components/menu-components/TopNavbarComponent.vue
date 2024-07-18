<script lang="ts" setup>
import { IUser } from '@/models/IUser';
import {computed, onBeforeMount, ref} from 'vue';
import { useMenuStore } from "@/store/menuStore";
import WorkoutController from "@/controllers/WorkoutController";
import {useUserStore} from "@/store/userStore";

const userData = computed(() => { return useUserStore().getUserData });
const hasUserAnyNotifications = userData.value.notificationsData.length > 0;
const isMobile = ref(false);

onBeforeMount(async () => {
  screen.width < 760 ? isMobile.value = true : isMobile.value = false;
});

</script>
<template>
    <div class="heading-dashboard">
      <div @click="useMenuStore().updateMobileMenuState(true)" v-if="isMobile" class="hamburger-menu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
      <h5 v-if="!isMobile" class="text-white heading-logo">Nadzorna <span class="highlighted">Ploča</span></h5>
      <div class="user-info">
        <div class="notification-icon">
          <a href="#">
            <img width="20" src="@/assets/img/icons/dashboard/notification.png" alt="">
            <span v-if="hasUserAnyNotifications" class="badge badge-light">1</span>
          </a>
        </div>
        <div class="personal-info">
          <h5 class="text-white heading-user-name">
            {{ userData?.name }} {{ userData?.lastName }}
          </h5>
          <img class="border border-2 border-dark rounded-circle ms-2" :src="userData?.picture" height="40" alt="" />
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/menu-components/dashboard-top-navbar.css";
</style>