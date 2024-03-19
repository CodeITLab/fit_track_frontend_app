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
        <button @click="closeModal">
          <img width="25" src="@/assets/img/icons/x-circle-fill.svg" alt="" />
        </button>
      </div>
      <hr />
      <div class="workout-form">
        <form @submit.prevent="submit">
          <label>
            Workout name:
            <input
              type="text"
              v-model="formValues.name"
              :placeholder="useWorkoutStore().getSelectedWorkout?.name"
            />
          </label>
          <div
            class="exercises"
            v-for="exercise in useWorkoutStore().getSelectedWorkout
              ?.exercisesData"
          ></div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css";
</style>
@/controllers/GetWorkoutDataController
