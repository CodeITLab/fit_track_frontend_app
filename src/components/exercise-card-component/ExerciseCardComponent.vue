<script lang="ts">
import { defineComponent } from "vue";
import { useWorkoutDataStore } from "../../store/WorkoutData";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title", "workouts", "sets", "reps"],
  data() {
    return {
      cardTitle: this.title,
      workoutData: this.workouts,
      // workoutSets: this.sets,
      // workoutReps: this.reps,
    };
  },
  mounted() {},
});
</script>

<template>
  <div class="d-flex flex-row justify-content-center align-items-center me-3">
    <div
      class="card bg-light shadow d-flex flex-row"
      style="--bs-bg-opacity: 0.3"
    >
      <div class="m-3" style="width: 10rem">
        <h4 class="font text-center text-white">{{ cardTitle }}</h4>
        <!-- redudantno  -->
        <!-- <ul>
          <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black font"
          >
            Exercise name: {{ value.exerciseName }}
          </li> -->
        <!-- <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black"
          >
            <p class="mb-0 font">Sets: {{ value.sets }}</p>
          </li>
          <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black"
          >
            <p class="font">Reps: {{ value.reps }}</p>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/exercise-card-component.css";
</style>