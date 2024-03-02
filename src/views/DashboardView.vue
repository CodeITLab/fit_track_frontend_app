<script lang="ts" setup>

import TopNavbarComponent from '@/components/menu-components/top-navbar-menu/TopNavbarComponent.vue';
import SideNavbarComponent from '@/components/menu-components/side-menu/SideNavbarComponent.vue';
import LogoutModal from '@/components/modal-components/logout-modal/LogoutModal.vue';
import { useModalStore } from '@/store/modalStore';

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <TopNavbarComponent />
      <LogoutModal v-if="useModalStore().getLogoutModalValue"/>
    </main>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>