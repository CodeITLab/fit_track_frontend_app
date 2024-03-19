<script lang="ts" setup>
import { useModalStore } from "@/store/modalStore";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import { saveWorkoutData } from "@/api/useFetch";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";
import ModalManager from "@/controllers/ModalManagerController";
import { useWorkoutStore } from "../../../store/workoutStore";

let formValues = {
  name: "",
  workoutOwner: "",
  exercisesData: [
    {
      name: "",
      reps: 0,
      sets: 0,
      isWorkoutFinished: false,
    },
  ],
};

const resetFormValues = () => {
  formValues = {
    name: "",
    workoutOwner: "",
    exercisesData: [
      {
        name: "",
        reps: 0,
        sets: 0,
        isWorkoutFinished: false,
      },
    ],
  };
};

const closeModal = () => {
  ModalManager().UpdateCurrentModalValue("updateWorkoutModal", false);
};

const isModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "updateWorkoutModal";
};

const submit = (values: any) => {
  const userEmail = localStorage.getItem("email") || "";
  const exerciseData = formValues.exercisesData.map((value) => {
    return {
      name: value.name,
      sets: value.sets,
      reps: value.reps,
      isWorkoutFinished: value.isWorkoutFinished,
    };
  });

  const workoutData: IWorkoutModel = {
    name: values["workoutName"],
    workoutOwner: userEmail,
    exercisesData: exerciseData,
  };

  saveWorkoutData(workoutData).saveWorkoutData();
  resetFormValues();
  GetWorkoutData();
  closeModal();
};
</script>

<template>
  <div class="container-fluid create-workout-modal" v-if="isModalActive()">
    <div class="create-workout-modal-wrapper">
      <div class="create-workout-modal-header">
        <div class="create-workout-modal-title">
          <h3>Your Workout</h3>
        </div>
        <button class="close-workout" @click="closeModal">
          <img width="25" src="@/assets/img/icons/x-circle-fill.svg" alt="" />
        </button>
      </div>
      <hr />
      <div class="workout-form">
        <form @submit.prevent="submit">
          <label>
            Workout name:
            <input type="text" v-model="formValues.name" :placeholder="useWorkoutStore().getSelectedWorkout?.name" />
          </label>
          <hr/>
          <div class="exercises" v-for="exercise in useWorkoutStore().getSelectedWorkout?.exercisesData">
            <div class="input-group">
              <label for="exerciseName" class="form-label">Exercise Name</label>
              <input type="text" class="form-control" id="exerciseName" :value="exercise.name">
            </div>
            <div class="input-group">
              <label for="sets" class="form-label">Sets</label>
              <input type="text" class="form-control" id="sets" :value="exercise.sets">
            </div>
            <div class="input-group">
              <label for="reps" class="form-label">Reps</label>
              <input type="text" class="form-control" id="reps" :value="exercise.reps">
            </div>
            <div class="form-check">
              <label class="form-check-label" for="isWorkoutFinished">Finished</label>
              <input class="form-check-input" type="checkbox" value="" id="isWorkoutFinished" :value="exercise.isWorkoutFinished">
            </div>
          </div>
          <hr/>
          <div class="create-workout-modal-footer">
            <button type="button" class="btn btn-outline-primary">Add Exercise</button>
            <button type="button" class="btn btn-outline-danger">Delete Workout</button>
            <button type="button" class="btn btn-outline-success">Update</button>
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
