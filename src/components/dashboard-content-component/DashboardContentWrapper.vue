<script lang="ts" setup>

import {useDashboardStore} from "@/store/dashboardStore";
import WorkoutCardComponent from "@/components/workout-components/WorkoutCardComponent.vue";
import {computed} from "vue";
import CreateWorkoutButton from "@/components/workout-components/CreateWorkoutButton.vue";

let currentDashboardView = computed(() => { return useDashboardStore().getCurrentDashboardView })

</script>

<template>
  <div class="container-fluid dashboard-content-wrapper">
    <div v-if="currentDashboardView === 'workouts'" class="row">
      <div class="col">
        <h2 class="dashboard-title">Moje rutine</h2>
      </div>
      <div class="col">
        <CreateWorkoutButton />
        <WorkoutCardComponent />
      </div>
    </div>
    <div v-if="currentDashboardView === 'analytics'" class="row">
      <div class="col">
        <h2 class="dashboard-title">Analitika</h2>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/dashboard-content-component/dashboard-content-wrapper.css";
</style>