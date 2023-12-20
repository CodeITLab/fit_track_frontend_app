<script lang="ts">
import { defineComponent } from "vue";
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutComponent from "../components/create-workout-component/CreateWorkoutComponent.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    SideNavbarComponent,
    CreateWorkoutComponent,
    DashboardTopNavbarComponent,
  },
});
</script>
<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <DashboardTopNavbarComponent />
      <CreateWorkoutComponent />
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


