<script lang="ts">
import { defineComponent } from "vue";
import { useWorkoutDataStore } from "../store/WorkoutData";
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutModal from "@/components/create-workout-component/create-workout-modal/CreateWorkoutModal.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import ExerciseCardComponent from "@/components/exercise-card-component/ExerciseCardComponent.vue";
import CreateWorkoutButton from "@/components/create-workout-component/create-workout-button/CreateWorkoutButton.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    SideNavbarComponent,
    CreateWorkoutButton,
    CreateWorkoutModal,
    DashboardTopNavbarComponent,
    ExerciseCardComponent,
  },
  methods: {
    displayWorkoutCardComponent(): boolean {
      const store = useWorkoutDataStore();
      if (store.workouts.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
});
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
      <ExerciseCardComponent v-if="displayWorkoutCardComponent()" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


