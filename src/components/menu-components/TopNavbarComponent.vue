<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IUser } from '@/models/IUser';
import { onBeforeMount, ref } from 'vue';
import { useMenuStore } from "@/store/menuStore";

const userData = ref<IUser | null>();
const userDataErrors = ref(false);
const isMobile = ref(false);

onBeforeMount(async () => {

  screen.width < 760 ? isMobile.value = true : isMobile.value = false;
  let currentUser = localStorage.getItem('email');

  const { data, hasError } = await getData<IUser>(
    'http://127.0.0.1:8080/user/get-user-by-email?email=' + currentUser
  );

  userData.value = data.value;
  userDataErrors.value = hasError.value;
});

</script>
<template>
  <div class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
    <div class="heading-dashboard">
      <div @click="useMenuStore().updateMobileMenuState(true)" v-if="isMobile" class="hamburger-menu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
      <h5 v-if="!isMobile" class="text-white">Dashboard</h5>
      <div class="user-info">
        <h5 class="text-white">
          {{ userData?.name }}
        </h5>
        <img class="border border-2 border-dark rounded-circle ms-2" :src="userData?.picture" height="45" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/dashboard-top-navbar.css";
</style>