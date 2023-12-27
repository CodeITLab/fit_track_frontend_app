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
      workoutReps: this.sets,
    };
  },
});
</script>

<template>
  <div>
    <div class="card" style="width: 18rem">
      <h4>{{ cardTitle }}</h4>
      <p>{{ workoutName }}</p>
      <p>{{ workoutSets }}</p>
      <p>{{ workoutReps }}</p>
    </div>
  </div>
</template>

<style></style>