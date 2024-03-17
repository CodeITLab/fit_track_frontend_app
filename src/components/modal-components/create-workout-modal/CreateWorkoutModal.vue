<script lang="ts" setup>
import { useModalStore } from "@/store/modalStore";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import { saveWorkoutData } from "@/api/useFetch";
import GetWorkoutData from "@/controllers/WorkoutController";

const exerciseDataValues = [
  {
    name: "",
    reps: 0,
    sets: 0,
    isWorkoutFinished: false,
  },
];

const closeModal = () => {
  useModalStore().setCreateYourWorkoutModalValue(false);
  useModalStore().setIsPlanYourWorkoutModalActive(true);
};

const submit = (values: any) => {
  const userEmail = localStorage.getItem("email") || "";
  const exerciseData = exerciseDataValues.map((value) => {
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
  GetWorkoutData();
  closeModal();
};
</script>

<template>
  <div
    class="container-fluid create-workout-modal"
    v-if="useModalStore().getCreateWorkoutModalValue"
  >
    <div class="create-workout-modal-wrapper">
      <div class="create-workout-modal-header">
        <div class="create-workout-modal-title">
          <h3>Create Your Workout</h3>
        </div>
        <button @click="closeModal">
          <img width="25" src="@/assets/img/icons/x-circle-fill.svg" alt="" />
        </button>
      </div>
      <hr />
      <FormKit type="form" submit-label="Finish" @submit="submit">
        <FormKit
          name="workoutName"
          label="Workout Name"
          validation="required"
        />
        <FormKit
          v-model="exerciseDataValues"
          type="list"
          :value="[{}]"
          dynamic
          #default="{ items, node, value }"
        >
          <FormKit
            type="group"
            v-for="(item, index) in items"
            :key="item"
            :index="index"
          >
            <div class="exercises-group">
              <FormKit
                type="text"
                name="name"
                label="Exercise name"
                placeholder="Exercise name"
                validation="required"
              />

              <FormKit
                type="number"
                name="sets"
                label="Sets"
                validation="required"
              />
              <FormKit
                type="number"
                name="reps"
                label="Reps"
                validation="required"
              />
              <FormKit
                outer-class="is-workout-finished"
                type="checkbox"
                name="isWorkoutFinished"
                label="Done"
                validation="required"
              />

              <div class="delete-button">
                <button
                  type="button"
                  @click="
                    () => node.input(value?.filter((_, i) => i !== index))
                  "
                  class="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </div>
            <hr />
          </FormKit>

          <button
            type="button"
            @click="() => node.input(value?.concat({}))"
            class="btn btn-outline-info"
          >
            Add Exercise
          </button>
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css";
</style>
