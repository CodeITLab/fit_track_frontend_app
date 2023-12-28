<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title", "name", "sets", "reps"],
  data() {
    return {
      cardTitle: this.title,
      workoutName: this.name,
      workoutSets: this.sets,
      workoutReps: this.reps,
    };
  },
});
</script>

<template>
  <div>
    <div class="card mt-5 ms-3 bg-info shadow" style="width: 18rem">
      <div class="card ps-2">
        <h4>{{ cardTitle }}</h4>
        <p>Workout Name: {{ workoutName }}</p>
        <p>Sets: {{ workoutSets }}</p>
        <p>Reps: {{ workoutReps }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>