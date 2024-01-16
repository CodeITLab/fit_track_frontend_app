<script lang="ts" setup>
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

const probica = StoreAccessController().modalStore.workoutStatusCheck;
</script>

<template>
  <div v-if="probica === true" class="alert alert-primary" role="alert">
    <p>
      We suggest that you tick the checkbox when the exercise is finished so we
      can track your progress on your fitness journey more correctly
    </p>
  </div>
</template>

<style>
</style>