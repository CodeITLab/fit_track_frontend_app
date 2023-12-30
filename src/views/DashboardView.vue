<script lang="ts" setup>
import { useWorkoutDataStore } from "../store/WorkoutData";
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutModal from "@/components/create-workout-component/create-workout-modal/CreateWorkoutModal.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import ExerciseCardComponent from "@/components/exercise-card-component/ExerciseCardComponent.vue";
import CreateWorkoutButton from "@/components/create-workout-component/create-workout-button/CreateWorkoutButton.vue";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import { computed, ref, watch } from "vue";

const store = useWorkoutDataStore();
let workoutData = store.getWorkouts;
console.log(workoutData);
</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <DashboardTopNavbarComponent />
      <CreateWorkoutButton v-if="workoutData.length === 0" />
      <CreateWorkoutModal />
      <div class="d-flex flex-row">
        <div
          v-for="(value, index) in workoutData"
          :key="index"
          class="card-wrapper"
        >
          <ExerciseCardComponent
            :title="value.workoutName"
            :workouts="value.exerciseData"
          />
        </div>
        <div class="card-wrapper">
          <CreateWorkoutButton v-if="workoutData.length !== 0" />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


