<script lang="ts" setup>

import { UpdateWorkoutController } from "@/controllers/create-workout-controller/UpdateWorkoutController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

const onSubmit = () => { };

</script>

<template>
  <div class="modal-body d-flex flex-column">
    <div class="d-flex flex-column">
      <label for="Name your Exercise">Workout Name</label>
      <input v-model="UpdateWorkoutController().getWorkoutData.workoutName"
             class="m-1"
             type="text"
             :placeholder="UpdateWorkoutController().getWorkoutData.workoutName" />
    </div>
    <hr />
    <div class="d-flex flex-column justify-content-center align-items-center">
      <form action="submit"
            @submit.prevent="onSubmit"
            method="post">
        <table class="table-responsive">
          <thead>
            <th scope="col">Exercise Name</th>
            <th class="text-center"
                scope="col">Reps</th>
            <th class="text-center"
                scope="col">Sets</th>
          </thead>
          <tbody>
            <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
            <tr v-if="UpdateWorkoutController().getWorkoutData.exerciseData.length > 0"
                v-for="(value, index) in UpdateWorkoutController().getWorkoutData.exerciseData"
                :key="index">
              <td>
                <input v-model="value.exerciseName"
                       :key="index"
                       class="exercise-name-input"
                       type="text"
                       :placeholder="UpdateWorkoutController().getWorkoutData.exerciseData[index].exerciseName"
                       method="post" />
              </td>
              <td>
                <div class="modal-button-group">
                  <button @click="UpdateWorkoutController().increaseNumberOfReps(index)"
                          class="counter-button border-0 bg-transparent ms-1 p-0">
                    +
                  </button>
                  <p class="counter-value"
                     :key="index">
                    {{ UpdateWorkoutController().getWorkoutData.exerciseData[index].reps }}
                  </p>
                  <button @click="UpdateWorkoutController().decreaseNumberOfReps(index)"
                          class="counter-button border-0 bg-transparent me-1 p-0">
                    -
                  </button>
                </div>
              </td>
              <td>
                <div class="modal-button-group">
                  <button @click="UpdateWorkoutController().increaseNumberOfSets(index)"
                          class="counter-button border-0 bg-transparent ms-1 p-0">
                    +
                  </button>
                  <p class="counter-value"
                     :key="index">
                    {{ UpdateWorkoutController().getWorkoutData.exerciseData[index].sets }}
                  </p>
                  <button @click="UpdateWorkoutController().decreaseNumberOfSets(index)"
                          class="counter-button border-0 bg-transparent me-1 p-0">
                    -
                  </button>
                </div>
              </td>
              <td>
                <button @click="UpdateWorkoutController().removeExercise(index)"
                        type="button"
                        class="delete-btn">
                  <img height="16"
                       src="../../../assets/img/icons/delete.png"
                       alt="delete button" />
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div class="footer-button-wrapper">
                  <button @click="UpdateWorkoutController().increaseNumberOfExercises()"
                          class="btn btn-primary align-self-center mt-2">
                    Add Exercise
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <div class="modal-footer d-flex justify-content-center align-items-center">
                  <button @click="ModalController().setWorkoutDetailsModalValue(false)"
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal">
                    Close
                  </button>
                  <button type="button"
                          class="btn btn-primary"
                          @click="UpdateWorkoutController().updateWorkoutData">
                    Update
                  </button>

                  <button type="button"
                          class="btn btn-primary"
                          @click="UpdateWorkoutController().deleteWorkoutData">
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