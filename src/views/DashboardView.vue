<script lang="ts" setup>

import TopNavbarComponent from '@/components/menu-components/top-navbar-menu/TopNavbarComponent.vue';
import SideNavbarComponent from '@/components/menu-components/side-menu/SideNavbarComponent.vue';

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <TopNavbarComponent />
    </main>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>