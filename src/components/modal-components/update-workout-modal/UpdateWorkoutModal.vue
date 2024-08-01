<script lang="ts" setup>
import { IWorkoutModel } from "@/models/IWorkoutModel";
import ModalManager from "@/controllers/ModalManagerController";
import { useWorkoutStore } from "../../../store/workoutStore";
import UpdateWorkoutDataController from "@/controllers/UpdateWorkoutDataController";
import { WorkoutModalText, GeneralText } from "@/helpers/TextEnums";
import WorkoutController from "@/controllers/ApiController";

const deleteWorkout = () => {
  WorkoutController.deleteData();
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
    WorkoutController.updateData(workoutData);
    ModalManager().CloseModal("updateWorkoutModal");
  }
};
</script>

<template>
  <div
    class="create-workout-modal"
    v-if="ModalManager().IsModalActive('updateWorkoutModal')"
  >
    <div class="create-workout-modal-wrapper">
      <div class="create-workout-modal-header">
        <div class="create-workout-modal-title">
          <h3>{{ WorkoutModalText.WORKOUT }}</h3>
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
            maxlength="20"
            v-model="useWorkoutStore().getSelectedWorkout.name"
            :placeholder="useWorkoutStore().getSelectedWorkout?.name"
          />
          <hr />
          <div
            class="exercises"
            v-for="(exercise, index) in useWorkoutStore().getSelectedWorkout
              ?.exercisesData"
          >
            <div class="form-check">
              <label for="exerciseName" class="form-label">{{
                WorkoutModalText.EXERCISE_NAME
              }}</label>
              <input
                type="text"
                class="form-control"
                id="exerciseName"
                maxlength="16"
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
            <div class="form-check finished-workout">
              <label class="form-label" for="isWorkoutFinished">{{
                WorkoutModalText.FINISHED
              }}</label>
              <input
                class="form-check-input"
                type="checkbox"
                id="isWorkoutFinished"
                v-model="exercise.isWorkoutFinished"
                :value="exercise.isWorkoutFinished"
                required
              />
            </div>
            <div class="form-check">
              <label class="form-label">{{ GeneralText.DELETE }}</label>
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
              {{ GeneralText.ADD_EXERCISE }}
            </button>
            <button
              @click="deleteWorkout()"
              type="button"
              class="btn btn-outline-danger"
            >
              {{ GeneralText.DELETE }}
            </button>
            <button
              @click="submit"
              type="button"
              class="btn btn-outline-success"
            >
              {{ GeneralText.UPDATE }}
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
