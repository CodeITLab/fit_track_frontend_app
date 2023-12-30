<script lang="ts">
import { defineComponent } from "vue";
import { useModalManager } from "../../../store/ModalManager";

import CreateWorkoutModalTitle from "../create-workout-modal/CreateWorkoutModalTitle.vue";
import CreateWorkoutModalBody from "../create-workout-modal/CreateWorkoutModalBody.vue";

export default defineComponent({
  name: "CreateWorkoutModal",
  components: {
    CreateWorkoutModalTitle,
    CreateWorkoutModalBody,
  },

  methods: {
    isModalOpened(): boolean {
      const store = useModalManager();
      if (store.isOpened) {
        return true;
      } else {
        return false;
      }
    },
    setModalValue(modalData: boolean): void {
      const store = useModalManager();
      store.isOpened = modalData;
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
        <CreateWorkoutModalTitle />
        <CreateWorkoutModalBody />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/create-workout-component.css";
</style>