<script lang="ts" setup>
import TopNavbarComponent from "@/components/menu-components/TopNavbarComponent.vue";
import SideNavbarComponent from "@/components/menu-components/SideNavbarComponent.vue";
import LogoutModal from "@/components/modal-components/logout-modal/LogoutModal.vue";
import CreateWorkoutButton from "@/components/workout-components/CreateWorkoutButton.vue";
import CreateWorkoutModal from "@/components/modal-components/create-workout-modal/CreateWorkoutModal.vue";
import WorkoutCardComponent from "@/components/workout-components/WorkoutCardComponent.vue";
import { onBeforeMount } from "vue";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";
import UpdateWorkoutModal from "@/components/modal-components/update-workout-modal/UpdateWorkoutModal.vue";

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
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <TopNavbarComponent />
          </div>
          <div class="col">
            <h2>Moje rutine</h2>
          </div>
          <div class="col">
            <WorkoutCardComponent />
          </div>
        </div>
      </div>
      <CreateWorkoutButton />
      <CreateWorkoutModal />
      <UpdateWorkoutModal />
      <LogoutModal />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>
