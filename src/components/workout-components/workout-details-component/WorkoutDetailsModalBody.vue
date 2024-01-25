<script lang="ts" setup>
import { WorkoutsController } from "@/controllers/create-workout-controller/WorkoutsController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";
import WarningBannerComponentVue from "../warning-banner-component/WarningBannerComponent.vue";

const getWorkoutData = reactive(
  StoreAccessController().workoutStore.getSelectedWorkout
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

const v$ = useVuelidate(validationRules, getWorkoutData);

const onSubmit = async () => {
  const result = await v$.value.$validate();
  if (!result) {
    console.log(result);
  } else {
    WorkoutsController().updateWorkoutData();
  }
};
</script>

<template>
  <div class="modal-body d-flex flex-column">
    <div class="d-flex flex-column">
      <label for="Name your Exercise">Workout Name</label>
      <input
        v-model="getWorkoutData.workoutName"
        :class="{ error: v$.$errors.length }"
        class="m-1"
        type="text"
        :placeholder="getWorkoutData.workoutName"
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
            <th class="text-center" scope="col">Delete</th>
            <th class="text-center" scope="col">Done</th>
          </thead>
          <tbody>
            <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
            <tr
              v-if="getWorkoutData.exerciseData.length > 0"
              v-for="(value, index) in getWorkoutData.exerciseData"
              :key="index"
            >
              <td>
                <input
                  v-model="value.exerciseName"
                  :key="index"
                  :class="{ error: v$.$errors.length }"
                  class="exercise-name-input"
                  type="text"
                  :placeholder="getWorkoutData.exerciseData[index].exerciseName"
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
                  <p class="counter-value" :key="index">
                    {{ getWorkoutData.exerciseData[index].reps }}
                  </p>
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
                  <p class="counter-value" :key="index">
                    {{ getWorkoutData.exerciseData[index].sets }}
                  </p>
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
                    src="../../../assets/img/icons/delete.png"
                    alt="delete button"
                  />
                </button>
              </td>
              <td>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    value=""
                    v-model="value.isWorkoutFinished"
                    id="flex-check-default"
                  />
                  <label
                    for="flex-check-default"
                    class="form-check-label"
                  ></label>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div class="footer-button-wrapper">
                  <button
                    type="button"
                    @click="WorkoutsController().increaseNumberOfExercises()"
                    class="btn btn-primary align-self-center mt-2"
                  >
                    Add Exercise
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div
                  v-if="StoreAccessController().modalStore.getWrkourStatusCheck"
                >
                  <WarningBannerComponentVue />
                </div>

                <div
                  class="modal-footer d-flex justify-content-center align-items-center"
                >
                  <button
                    @click="
                      ModalController().setWorkoutDetailsModalValue(false)
                    "
                    type="button"
                    :class="{ disabled: v$.$errors.length }"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">Update</button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="WorkoutsController().deleteWorkoutData"
                  >
                    Delete
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