<script lang="ts" setup>

import TopNavbarComponent from '@/components/menu-components/TopNavbarComponent.vue';
import SideNavbarComponent from '@/components/menu-components/SideNavbarComponent.vue';
import LogoutModal from '@/components/modal-components/logout-modal/LogoutModal.vue';
import { useModalStore } from '@/store/modalStore';
import CreateWorkoutButton from '@/components/create-workout/CreateWorkoutButton.vue';

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <TopNavbarComponent />
      <CreateWorkoutButton />
      <LogoutModal v-if="useModalStore().getLogoutModalValue"/>
    </main>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>