<script lang="ts" setup>
import { useWorkoutDataStore } from "../store/WorkoutData";
import { useModalManager } from "../store/ModalManager";
import SideNavbarComponent from "../components/menu-navbar-components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutModal from "../components/workout-components/create-workout-component/create-workout-modal/CreateWorkoutModal.vue";
import DashboardTopNavbarComponent from "../components/menu-navbar-components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import CreateWorkoutButton from "../components/workout-components/create-workout-component/create-workout-button/CreateWorkoutButton.vue";
import WorkoutDetailsModal from "../components/workout-components/workout-details-component/WorkoutDetailsModal.vue";
import ExerciseCardComponentWrapperVue from "../components/exercise-card-component/ExerciseCardComponentWrapper.vue";
import { GetUserData } from "@/services/GetUserData";

const workoutStore = useWorkoutDataStore();
const modalStore = useModalManager();
console.log(GetUserData().getUserData());

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <DashboardTopNavbarComponent />
      <CreateWorkoutButton v-if="workoutStore.getWorkouts.length === 0" />
      <CreateWorkoutModal />
      <WorkoutDetailsModal v-if="modalStore.getWorkoutDetailsModalState" />
      <div class="cards d-flex flex-row ms-3 justify-content-left align-items-center">
        <ExerciseCardComponentWrapperVue />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


