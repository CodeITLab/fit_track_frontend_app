<script lang="ts">
// import AnalyticsCard from "../components/analytics-component/AnalyticsCard.vue"
// import ProgressCard from "../components/progress-component/ProgressCard.vue"
import { defineComponent } from "vue";
import SideNavbar from "@/components/side-navbar/SideNavbar.vue";
import DayCard from "../components/day-card-component/DayCard.vue";


export default defineComponent({
  name: "DashboardView",
  components: { SideNavbar,DayCard },
});
</script>
<template>
  <div class="dashboard-wrapper d-flex flex-row">
    <SideNavbar />
    <div
      class="content-card bg-transparent d-flex flex-column justify-content-between"
    >
      <div
        class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3"
      >
        <h5 class="text-white">Dashboard</h5>
        <h6 class="text-white">
          John Doe
          <img
            class="ms-1"
            src="../assets/img/logos/avatar.png"
            height="40"
            alt=""
          />
        </h6>
      </div>
      <div
        class="add-day d-flex flex-row justify-content-center border border-dark-3 align-items-center align-self-center text-center mb-3"
      >
        <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
        <DayCard/>
      </div>
      <div
        class="dashboard-content d-flex flex-row justify-content-center"
      ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


