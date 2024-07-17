<script lang="ts" setup>
import TopNavbarComponent from "@/components/menu-components/TopNavbarComponent.vue";
import SideNavbarComponent from "@/components/menu-components/SideNavbarComponent.vue";
import LogoutModal from "@/components/modal-components/logout-modal/LogoutModal.vue";
import CreateWorkoutButton from "@/components/workout-components/CreateWorkoutButton.vue";
import CreateWorkoutModal from "@/components/modal-components/create-workout-modal/CreateWorkoutModal.vue";
import { onBeforeMount } from "vue";
import UpdateWorkoutModal from "@/components/modal-components/update-workout-modal/UpdateWorkoutModal.vue";
import DashboardContentWrapper from "@/components/dashboard-content-component/DashboardContentWrapper.vue";
import WorkoutController from "@/controllers/WorkoutController";

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col heading">
            <TopNavbarComponent />
          </div>
          <div class="col">
            <DashboardContentWrapper/>
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
