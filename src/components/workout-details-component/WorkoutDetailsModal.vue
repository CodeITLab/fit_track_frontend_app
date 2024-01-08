<script lang="ts">
import { defineComponent, ref } from "vue";
import { useModalManager } from "../../store/ModalManager";
import WorkoutDetailsModalBody from "../../components/workout-details-component/WorkoutDeailsModalBody.vue";
import { useWorkoutDataStore } from "../../store/WorkoutData";
export default defineComponent({
  name: "WorkoutDetailsModal",
  components: {
    WorkoutDetailsModalBody,
  },
  setup() {
    const workoutDetails = ref({});

    return { workoutDetails };
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
    setWorkoutDetails(): void {
      const store = useWorkoutDataStore();
      this.workoutDetails = store.createSelectedWorkout;
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
        <WorkoutDetailsModalBody />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/create-workout-component.css";
</style>