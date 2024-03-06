<script lang="ts"
        setup>

        import TopNavbarComponent from '@/components/menu-components/TopNavbarComponent.vue';
        import SideNavbarComponent from '@/components/menu-components/SideNavbarComponent.vue';
        import LogoutModal from '@/components/modal-components/logout-modal/LogoutModal.vue';
        import CreateWorkoutButton from '@/components/create-workout/CreateWorkoutButton.vue';
        import CreateWorkoutModal from '@/components/modal-components/create-workout-modal/CreateWorkoutModal.vue';
        import WorkoutCardComponent from '@/components/workout-components/WorkoutCardComponent.vue';

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <TopNavbarComponent />

      <WorkoutCardComponent />

      <CreateWorkoutButton />
      <CreateWorkoutModal />
      <LogoutModal />
    </main>
  </div>
</template>


<style lang="scss"
       scoped>
      @import "../assets/css/views/dashboard.css";
    </style>