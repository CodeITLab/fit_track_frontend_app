<script lang="ts">
import { defineComponent } from "vue";
import {useWorkoutDataStore} from  "../store/WorkoutData"
import SideNavbarComponent from "@/components/side-navbar-component/SideNavbarComponent.vue";
import CreateWorkoutComponent from "../components/create-workout-component/CreateWorkoutComponent.vue";
import DashboardTopNavbarComponent from "@/components/dashboard-top-navbar-component/DashboardTopNavbarComponent.vue";
import DayCardComponent from "@/components/day-card-component/DayCardComponent.vue";
export default defineComponent({
  name: "DashboardView",
  components: {
    SideNavbarComponent,
    CreateWorkoutComponent,
    DashboardTopNavbarComponent,
    DayCardComponent
  },
  methods: {
    displayWorkoutCardComponent():boolean{
      const store = useWorkoutDataStore()
      if(store.workouts.workoutName){
        return true
      }else{
        return false
      }
    }
  }
});
</script>
<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent />
    </aside>
    <main>
      <DashboardTopNavbarComponent />
      <CreateWorkoutComponent />
      <DayCardComponent v-if="displayWorkoutCardComponent()"/>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


