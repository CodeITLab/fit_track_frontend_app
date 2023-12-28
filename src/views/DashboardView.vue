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
      <CreateWorkoutButton v-if="workoutData.length === 0" />
      <CreateWorkoutModal />
      <div class="card-conteiner">
        <div
          v-for="(value, index) in workoutData"
          :key="index"
          class="card-wrapper d-flex flex-row"
        >
          <ExerciseCardComponent
            :title="value.workoutName"
            :name="value.exerciseData[index].exerciseName"
            :sets="value.exerciseData[index].sets"
            :reps="value.exerciseData[index].reps"
          />
        </div>
        <div class="card-wrapper">
          <CreateWorkoutButton />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


