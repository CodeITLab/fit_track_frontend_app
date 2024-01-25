<script lang="ts" setup>
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

const props = defineProps(["title"]);

const setModalValue = (modalValue: boolean) => {
  StoreAccessController().modalStore.openCloseWorkoutDetail(modalValue);
};
</script>

<template>
  <button
    @click="setModalValue(true)"
    type="button"
    class="plus-btn"
    data-toggle="modal"
    data-target="#exampleModal"
  >
    <div class="d-flex flex-row justify-content-center align-items-center me-3">
      <div
        class="card bg-light shadow d-flex flex-row"
        style="--bs-bg-opacity: 0.3"
      >
        <div class="m-3" style="width: 10rem">
          <h4 class="font text-center text-white">{{ props.title }}</h4>
        </div>
      </div>
    </div>
  </button>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/exercise-card-component.css";
</style>