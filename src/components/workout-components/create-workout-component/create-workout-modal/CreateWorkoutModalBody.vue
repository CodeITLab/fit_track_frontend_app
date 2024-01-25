<script lang="ts" setup>
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { WorkoutsController } from "@/controllers/create-workout-controller/WorkoutsController";
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";

const workoutData = reactive(
  StoreAccessController().workoutStore.getDefaultWorkoutData
);

const validationRules = {
  workoutName: { required },
  exerciseData: [
    {
      exerciseName: { required },
      sets: { required },
      reps: { required },
      isWorkoutFinished: false,
    },
  ],
};

const v$ = useVuelidate(validationRules, workoutData);

const onSubmit = async () => {
  const result = await v$.value.$validate();
  if (!result) {
    console.log(result);
  } else {
    WorkoutsController().saveWorkoutData();
  }
};
</script>

<template>
  <div class="modal-body d-flex flex-column">
    <div class="d-flex flex-column">
      <label for="Name your Exercise">Name your Workout</label>
      <input
        v-model="workoutData.workoutName"
        :class="{ error: v$.$errors.length }"
        type="text"
        placeholder="Push day..."
        required
      />
    </div>
    <hr />
    <div class="d-flex flex-column justify-content-center align-items-center">
      <form action="submit" @submit.prevent="onSubmit" method="post">
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
                  :class="{ error: v$.$errors.length }"
                  class="exercise-name-input"
                  type="text"
                  placeholder="Push ups..."
                  method="post"
                />
              </td>
              <td>
                <div class="modal-button-group">
                  <button
                    type="button"
                    @click="WorkoutsController().increaseNumberOfReps(index)"
                    class="btn counter-button border-0 bg-transparent ms-1 p-0"
                  >
                    +
                  </button>
                  <p class="counter-value" :key="index">{{ value.reps }}</p>
                  <button
                    type="button"
                    @click="WorkoutsController().decreaseNumberOfReps(index)"
                    class="btn counter-button border-0 bg-transparent me-1 p-0"
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <div class="modal-button-group">
                  <button
                    type="button"
                    @click="WorkoutsController().increaseNumberOfSets(index)"
                    class="btn counter-button border-0 bg-transparent ms-1 p-0"
                  >
                    +
                  </button>
                  <p class="counter-value" :key="index">{{ value.sets }}</p>
                  <button
                    type="button"
                    @click="WorkoutsController().decreaseNumberOfSets(index)"
                    class="btn counter-button border-0 bg-transparent me-1 p-0"
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <button
                  @click="WorkoutsController().removeExercise(index)"
                  type="button"
                  class="delete-btn"
                >
                  <img
                    height="16"
                    src="../../../../assets/img/icons/delete.png"
                    alt="delete button"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div class="footer-button-wrapper">
                  <button
                    @click="WorkoutsController().increaseNumberOfExercises()"
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
                    @click="ModalController().setCreateWorkoutModalValue(false)"
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
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
@import "../../../../assets/css/components/create-workout-modal/create-workout-modal-body.css";
</style>