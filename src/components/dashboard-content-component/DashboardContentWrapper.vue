<script lang="ts" setup>

import {useDashboardStore} from "@/store/dashboardStore";
import WorkoutCardComponent from "@/components/workout-components/WorkoutCardComponent.vue";
import {computed} from "vue";

let currentDashboardView = computed(() => { return useDashboardStore().getCurrentDashboardView })

</script>

<template>
  <div class="container-fluid">
    <div v-if="currentDashboardView === 'workouts'" class="row">
      <div class="col">
        <h2 class="dashboard-title">Moje rutine</h2>
      </div>
      <div class="col">
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

<style></style>