<script lang="ts">
// import AnalyticsCard from "../components/analytics-component/AnalyticsCard.vue"
// import ProgressCard from "../components/progress-component/ProgressCard.vue"
import { defineComponent } from "vue";
import SideNavbarComponent from "@/components/side-navbar/SideNavbarComponent.vue";
import TrainingComponent from "../components/training-card-component/TrainingComponent.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar/DashboardTopNavbarComponent.vue"

export default defineComponent({
  name: "DashboardView",
  components: {
    SideNavbarComponent,
    TrainingComponent,
    DashboardTopNavbarComponent
  },
});
</script>
<template>
  <div class="dashboard-wrapper d-flex flex-row">
    <SideNavbarComponent />
    <DashboardTopNavbarComponent />

  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


