<script lang="ts">
import { useModalManager } from "@/store/ModalManager";
import { useWorkoutDataStore } from "@/store/WorkoutData";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateWorkoutModalBody",
  data() {
    return {
      workoutData: {
        workoutName: "",
        exerciseData: [
          {
            exerciseName: "",
            sets: 0,
            reps: 0,
          },
        ],
      },
    };
  },
  methods: {
    increaseNumberOfExercises(): void {
      this.workoutData.exerciseData.push({
        exerciseName: "",
        sets: 0,
        reps: 0,
      });
    },
    increaseNumberOfReps(index: number): void {
      this.workoutData.exerciseData[index].reps += 1;
    },
    decreaseNumberOfReps(index: number): void {
      if (this.workoutData.exerciseData[index].reps > 0) {
        this.workoutData.exerciseData[index].reps -= 1;
      }
    },
    increaseNumberOfSets(index: number): void {
      this.workoutData.exerciseData[index].sets += 1;
    },
    decreaseNumberOfSets(index: number): void {
      if (this.workoutData.exerciseData[index].sets > 0) {
        this.workoutData.exerciseData[index].sets -= 1;
      }
    },
    removeExercise(index: number): void {
      if (this.workoutData.exerciseData.length > 0) {
        this.workoutData.exerciseData.splice(index, 1);
      }
    },
    setModalValue(modalData: boolean): void {
      const store = useModalManager();
      store.isOpened = modalData;
    },
    saveWorkoutData(): void {
      const store = useWorkoutDataStore();
      store.createWorkout(this.workoutData);
    },
  },
});
</script>

<template>
  <div class="modal-body d-flex flex-column">
    <div class="d-flex flex-column">
      <label for="Name your Exercise">Name your Workout</label>
      <input
        v-model="workoutData.workoutName"
        class="m-1"
        type="text"
        placeholder="Push day..."
      />
    </div>
    <hr />
    <div class="d-flex flex-column justify-content-center align-items-center">
      <form action="submit" @submit.prevent="saveWorkoutData">
        <table class="table-responsive">
          <thead>
            <th scope="col">Exercise Name</th>
            <th class="text-center" scope="col">Reps</th>
            <th class="text-center" scope="col">Sets</th>
          </thead>
          <tbody>
            <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
            <tr
              v-if="workoutData.exerciseData.length > 0"
              v-for="(value, index) in workoutData.exerciseData"
              :key="index"
            >
              <td>
                <input
                  v-model="value.exerciseName"
                  :key="index"
                  class="exercise-name-input"
                  type="text"
                  placeholder="Push ups..."
                />
              </td>
              <td>
                <div class="modal-button-group">
                  <button
                    @click="increaseNumberOfReps(index)"
                    class="counter-button border-0 bg-transparent ms-1 p-0"
                  >
                    +
                  </button>
                  <p class="counter-value" :key="index">{{ value.reps }}</p>
                  <button
                    @click="decreaseNumberOfReps(index)"
                    class="counter-button border-0 bg-transparent me-1 p-0"
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <div class="modal-button-group">
                  <button
                    @click="increaseNumberOfSets(index)"
                    class="counter-button border-0 bg-transparent ms-1 p-0"
                  >
                    +
                  </button>
                  <p class="counter-value" :key="index">{{ value.sets }}</p>
                  <button
                    @click="decreaseNumberOfSets(index)"
                    class="counter-button border-0 bg-transparent me-1 p-0"
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <button
                  @click="removeExercise(index)"
                  type="button"
                  class="delete-btn"
                >
                  <img
                    height="16"
                    src="../../../assets/img/icons/delete.png"
                    alt="delete button"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div class="footer-button-wrapper">
                  <button
                    @click="increaseNumberOfExercises()"
                    class="btn btn-primary align-self-center mt-2"
                  >
                    Add Exercise
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div
                  class="modal-footer d-flex justify-content-center align-items-center"
                >
                  <button
                    @click="setModalValue(false)"
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveWorkoutData()"
                  >
                    Save changes
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<style lang="css">
@import "../../../assets/css/components/create-workout-modal/create-workout-modal-body.css";
</style>