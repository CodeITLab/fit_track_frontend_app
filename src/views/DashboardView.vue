<script lang="ts" setup>
import { useWorkoutDataStore } from "../store/WorkoutData";
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutModal from "@/components/create-workout-component/create-workout-modal/CreateWorkoutModal.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import ExerciseCardComponent from "@/components/exercise-card-component/ExerciseCardComponent.vue";
import CreateWorkoutButton from "@/components/create-workout-component/create-workout-button/CreateWorkoutButton.vue";
import WorkoutDetailsModal from "@/components/workout-details-component/WorkoutDetailsModal.vue";
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
      <WorkoutDetailsModal />
      <div
        class="cards d-flex flex-row ms-3 justify-content-left align-items-center"
      >
        <div
          v-for="(value, index) in workoutData"
          :key="index"
          class="card-wrapper d-flex justify-content-center align-items-center"
        >
          <!-- onclick sprema odabranu vrijednost u store -->
          <ExerciseCardComponent
            @click="store.createSelectedWorkout(value)"
            :title="value.workoutName"
          />
        </div>
        <div
          class="card-wrapper d-flex justify-content-center align-items-center"
        >
          <CreateWorkoutButton v-if="workoutData.length !== 0" />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


