<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title", "workouts"],
  data() {
    return {
      cardTitle: this.title,
      workoutData: this.workouts
    };
  },
  mounted() {
      console.log(this.workoutData);
  },
});
</script>

<template>
  <div>
    <div class="card mt-5 ms-3 bg-info shadow" style="width: 18rem">
      <div class="ps-2">
        <h4>{{ cardTitle }}</h4>
        <p>Workout Name: {{ cardTitle }}</p>
        <ul>
          <li v-for="(value, index) in workoutData" :key="index">{{ value.exerciseName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>