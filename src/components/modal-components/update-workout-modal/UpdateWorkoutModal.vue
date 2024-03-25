<script lang="ts" setup>
import { IWorkoutModel } from "@/models/IWorkoutModel";
import {
  deleteCurrentWorkout,
  saveWorkoutData,
  updateCurrentWorkout,
} from "@/api/useFetch";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";
import ModalManager from "@/controllers/ModalManagerController";
import { useWorkoutStore } from "../../../store/workoutStore";
import UpdateWorkoutDataController from "@/controllers/UpdateWorkoutDataController";

const deleteWorkout = () => {
  deleteCurrentWorkout(
    useWorkoutStore().getSelectedWorkout
  ).deleteWorkoutData();
  ModalManager().CloseModal("updateWorkoutModal");
};

const submit = () => {
  console.log(useWorkoutStore().getSelectedWorkout);

  const userEmail = localStorage.getItem("email") || "";

  const workoutData: IWorkoutModel = {
    name: useWorkoutStore().getSelectedWorkout?.name,
    workoutOwner: userEmail,
    exercisesData: useWorkoutStore().getSelectedWorkout?.exercisesData?.map(
      (item) => {
        return item;
      }
    ),
  };

  if (workoutData) {
    updateCurrentWorkout(workoutData).updateWorkoutData();
    ModalManager().CloseModal("updateWorkoutModal");
  }
};
</script>

<template>
  <div
    class="container-fluid create-workout-modal"
    v-if="ModalManager().IsModalActive('updateWorkoutModal')"
  >
    <div class="create-workout-modal-wrapper">
      <div class="create-workout-modal-header">
        <div class="create-workout-modal-title">
          <h3>Your Workout</h3>
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
          <label>Workout name: </label>
          <input
            type="text"
            name="workoutName"
            v-model="useWorkoutStore().getSelectedWorkout.name"
            :placeholder="useWorkoutStore().getSelectedWorkout?.name"
          />
          <hr />
          <div
            class="exercises"
            v-for="(exercise, index) in useWorkoutStore().getSelectedWorkout
              ?.exercisesData"
          >
            <div class="input-group">
              <label for="exerciseName" class="form-label">Exercise Name</label>
              <input
                type="text"
                class="form-control"
                id="exerciseName"
                v-model="exercise.name"
                :placeholder="exercise.name"
                required
              />
            </div>
            <div class="input-group">
              <label for="sets" class="form-label">Sets</label>
              <input
                type="text"
                class="form-control"
                id="sets"
                v-model="exercise.sets"
                :placeholder="exercise.sets"
                required
              />
            </div>
            <div class="input-group">
              <label for="reps" class="form-label">Reps</label>
              <input
                type="text"
                class="form-control"
                id="reps"
                v-model="exercise.reps"
                :placeholder="exercise.reps"
                required
              />
            </div>
            <div class="form-check">
              <label class="form-check-label" for="isWorkoutFinished"
                >Finished</label
              >
              <input
                class="form-check-input"
                type="checkbox"
                id="isWorkoutFinished"
                v-model="exercise.isWorkoutFinished"
                :value="exercise.isWorkoutFinished"
                required
              />
            </div>
            <div class="delete-exercise">
              <label class="form-check-label">Delete</label>
              <img
                @click="UpdateWorkoutDataController().removeExercise(index)"
                width="20"
                src="@/assets/img/icons/delete.png"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div class="create-workout-modal-footer">
            <button
              @click="UpdateWorkoutDataController().addExercise()"
              type="button"
              class="btn btn-outline-primary"
            >
              Add Exercise
            </button>
            <button
              @click="deleteWorkout()"
              type="button"
              class="btn btn-outline-danger"
            >
              Delete Workout
            </button>
            <button
              @click="submit"
              type="button"
              class="btn btn-outline-success"
            >
              Update
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
@/controllers/GetWorkoutDataController
