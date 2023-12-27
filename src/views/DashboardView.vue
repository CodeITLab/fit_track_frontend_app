<script lang="ts" setup>
import { useWorkoutDataStore } from "../store/WorkoutData";
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutModal from "@/components/create-workout-component/create-workout-modal/CreateWorkoutModal.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import ExerciseCardComponent from "@/components/exercise-card-component/ExerciseCardComponent.vue";
import CreateWorkoutButton from "@/components/create-workout-component/create-workout-button/CreateWorkoutButton.vue";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import { ref } from "vue";

const store = useWorkoutDataStore();

const workoutData = ref(store.workouts);
</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <DashboardTopNavbarComponent />
      <CreateWorkoutButton />
      <CreateWorkoutModal />
      <div v-for="(value, index) in workoutData"
           :key="index"
           class="lala">
        <p>{{ value }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


