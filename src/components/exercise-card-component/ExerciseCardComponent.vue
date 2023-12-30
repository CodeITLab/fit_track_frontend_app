<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title", "workouts", "sets", "reps"],
  data() {
    return {
      cardTitle: this.title,
      workoutData: this.workouts,
      workoutSets: this.sets,
      workoutReps: this.reps,
    };
  },
  mounted() {
    console.log(this.workoutData);
  },
});
</script>

<template>
  <div class="d-flex flex-row justify-content-center align-items-center me-3">
    <div
      class="card bg-info shadow d-flex flex-row"
      style="--bs-bg-opacity: 0.2"
    >
      <div class="m-3" style="width: 18rem">
        <h4 class="text-center text-black">{{ cardTitle }}</h4>
        <!-- redudantno  -->
        <ul>
          <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black"
          >
            Exercise name: {{ value.exerciseName }}
          </li>
          <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black"
          >
            <p class="mb-0">Sets: {{ value.sets }}</p>
          </li>
          <li
            v-for="(value, index) in workoutData"
            :key="index"
            class="list-unstyled text-black"
          >
            <p>Reps: {{ value.reps }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>