<script lang="ts">
// import AnalyticsCard from "../components/analytics-component/AnalyticsCard.vue"
// import ProgressCard from "../components/progress-component/ProgressCard.vue"
import { defineComponent } from "vue";
import SideNavbarComponent from "@/components/side-navbar/SideNavbarComponent.vue";
import CreateWorkoutComponent from "../components/create-workout-component/CreateWorkoutComponent.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue"

export default defineComponent({
  name: "DashboardView",
  components: {
    SideNavbarComponent,
    CreateWorkoutComponent,
    DashboardTopNavbarComponent
  },
});
</script>
<template>
  <div class="dashboard-wrapper">
    <DashboardTopNavbarComponent />
    <SideNavbarComponent />
    <CreateWorkoutComponent />
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


