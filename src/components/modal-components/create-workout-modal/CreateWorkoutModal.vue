<script lang="ts" setup>
import { IWorkoutModel } from "@/models/IWorkoutModel";
import ModalManager from "@/controllers/ModalManagerController";
import { useWorkoutStore } from "@/store/workoutStore";
import UpdateWorkoutDataController from "@/controllers/UpdateWorkoutDataController";
import { WorkoutModalText, GeneralText } from "@/helpers/TextEnums";
import { ref } from "vue";
import { saveWorkoutData } from "@/api/useFetch";

const userEmail = localStorage.getItem("email") || "";

const formValues = ref({
  name: "",
  workoutOwner: userEmail,
  exercisesData: [
    {
      name: "",
      sets: 0,
      reps: 0,
      isWorkoutFinished: false,
      weight: 0,
    },
  ],
});

const removeExercise = (index: number) => {
  formValues.value.exercisesData.splice(index, 1);
};

const addExercise = () => {
  formValues.value.exercisesData?.push({
    name: "",
    sets: 0,
    reps: 0,
    isWorkoutFinished: false,
    weight: 0,
  });
};

const resetFormValues = () => {
  formValues.value = {
    name: "",
    workoutOwner: "",
    exercisesData: [
      {
        name: "",
        sets: 0,
        reps: 0,
        isWorkoutFinished: false,
        weight: 0,
      },
    ],
  };
};

const closeModal = () => {
  ModalManager().UpdateCurrentModalValue("createWorkoutModal", false);
};

const submit = () => {
  saveWorkoutData(formValues.value).saveWorkoutData();
  resetFormValues();
  closeModal();
};
</script>

<template>
  <div
    class="create-workout-modal"
    v-if="ModalManager().IsModalActive('createWorkoutModal')"
  >
    <div class="create-workout-modal-wrapper">
      <div class="create-workout-modal-header">
        <div class="create-workout-modal-title">
          <h3>Tvoja rutina</h3>
        </div>
        <button
          class="close-workout"
          @click="ModalManager().CloseModal('updateWorkoutModal')"
        >
          <img width="25" src="@/assets/img/icons/x-circle-fill.svg" alt="" />
        </button>
      </div>
      <hr />
      <div class="workout-form">
        <form @submit.prevent="submit">
          <label class="me-2">{{ WorkoutModalText.WORKOUT_NAME }}: </label>
          <input
            type="text"
            name="workoutName"
            v-model="formValues.name"
            :placeholder="useWorkoutStore().getSelectedWorkout?.name"
          />
          <hr />
          <div
            class="exercises"
            v-for="(exercise, index) in formValues.exercisesData"
            v-bind:key="index"
          >
            <div class="form-check">
              <label for="exerciseName" class="form-label">{{
                WorkoutModalText.EXERCISE_NAME
              }}</label>
              <input
                type="text"
                class="form-control"
                id="exerciseName"
                v-model="exercise.name"
                :placeholder="exercise.name"
                required
              />
            </div>
            <div class="form-check">
              <label for="sets" class="form-label">{{
                WorkoutModalText.SETS
              }}</label>
              <input
                type="number"
                min="0"
                class="form-control"
                id="sets"
                v-model="exercise.sets"
                :placeholder="exercise.sets"
                required
              />
            </div>
            <div class="form-check">
              <label for="reps" class="form-label">{{
                WorkoutModalText.REPS
              }}</label>
              <input
                type="number"
                min="0"
                class="form-control"
                id="reps"
                v-model="exercise.reps"
                :placeholder="exercise.reps"
                required
              />
            </div>
            <div class="form-check">
              <label class="form-label" for="isWorkoutFinished">{{
                WorkoutModalText.WEIGHT
              }}</label>
              <input
                class="form-control"
                type="number"
                min="0"
                id="weight"
                v-model="exercise.weight"
                required
              />
            </div>
            <div class="form-check">
              <label class="form-label">{{ GeneralText.DELETE }}</label>
              <img
                @click="removeExercise(index)"
                width="20"
                src="@/assets/img/icons/delete.png"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div class="create-workout-modal-footer">
            <button
              @click="addExercise()"
              type="button"
              class="btn btn-outline-primary"
            >
              Add Exercise
            </button>
            <button
              @click="submit"
              type="button"
              class="btn btn-outline-success"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css";
</style>
