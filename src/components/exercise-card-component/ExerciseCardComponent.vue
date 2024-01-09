<script lang="ts">
import { defineComponent, provide } from "vue";
import { useWorkoutDataStore } from "../../store/WorkoutData";
import { useModalManager } from "../../store/ModalManager";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title", "workouts", "sets", "reps"],
  setup() {
    const store = useWorkoutDataStore();
    let workoutData = store.getWorkouts;
    provide("info", store);
    return { workoutData, store };
  },
  data() {
    return {
      cardTitle: this.title,
      workoutData: this.workouts,
      // workoutSets: this.sets,
      // workoutReps: this.reps,
    };
  },
  methods: {
    setModalValue(modalValue: boolean) {
      const store = useModalManager();
      store.openCloseWorkoutDetail(modalValue);
    },
  },
});
</script>

<template>
  <button
    @click="setModalValue(true)"
    type="button"
    class="plus-btn"
    data-toggle="modal"
    data-target="#exampleModal"
  >
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
  </button>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/exercise-card-component.css";
</style>