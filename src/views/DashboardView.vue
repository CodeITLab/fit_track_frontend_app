<script lang="ts" setup>
import TopNavbarComponent from "@/components/menu-components/TopNavbarComponent.vue";
import SideNavbarComponent from "@/components/menu-components/SideNavbarComponent.vue";
import LogoutModal from "@/components/modal-components/logout-modal/LogoutModal.vue";
import CreateWorkoutButton from "@/components/workout-components/CreateWorkoutButton.vue";
import CreateWorkoutModal from "@/components/modal-components/create-workout-modal/CreateWorkoutModal.vue";
import WorkoutCardComponent from "@/components/workout-components/WorkoutCardComponent.vue";
import { onBeforeMount } from "vue";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";

onBeforeMount(() => {
  GetWorkoutData();
});

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <TopNavbarComponent />
      <WorkoutCardComponent />
      <CreateWorkoutButton />
      <CreateWorkoutModal />
      <LogoutModal />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>
@/controllers/GetWorkoutDataController