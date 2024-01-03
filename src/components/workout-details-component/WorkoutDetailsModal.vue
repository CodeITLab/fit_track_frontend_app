<script lang="ts">
import { defineComponent } from "vue";
import { useModalManager } from "../../store/ModalManager";


import WorkoutDetailsModalBody from "../../components/create-workout-component/create-workout-modal/CreateWorkoutModalBody.vue"

export default defineComponent({
  name: "WorkoutDetailsModal",
  components: {
 
    WorkoutDetailsModalBody,
  },

  methods: {
    isModalOpened(): boolean {
      const store = useModalManager();
      if (store.workoutDetails) {
        return true;
      } else {
        return false;
      }
    },
    setModalValue(modalData: boolean): void {
      const store = useModalManager();
      store.workoutDetails = modalData;
    },
  },
});
</script>

<template>
    <div
      v-if="isModalOpened()"
      class="modal fade show d-flex justify-content-center align-items-center"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <WorkoutDetailsModalBody/>
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
@import "../../../assets/css/components/create-workout-component.css";
</style>