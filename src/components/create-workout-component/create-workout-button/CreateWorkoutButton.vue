<script lang="ts">
import { defineComponent } from "vue";
import { useModalManager } from "../../../store/ModalManager";

export default defineComponent({
  name: "CreateWorkoutButton",
  methods: {
    setModalValue(modalValue: boolean) {
      const store = useModalManager();
      store.openCloseModal(modalValue);
    },
  },
});
</script>

<template>
  <div class="d-flex justify-content-center align-items-center workout-modal">
    <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
    <button
      @click="setModalValue(true)"
      type="button"
      class="plus-btn"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      <img
        src="../../../assets/img/logos/add-icon.png"
        height="40"
        alt="add-button"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/create-workout-button.css";
</style>