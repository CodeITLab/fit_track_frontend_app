<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IWorkoutModel } from '@/models/IWorkoutModel';
import { useModalStore } from '@/store/modalStore';
import { onBeforeMount, ref } from 'vue';

const workoutData = ref<IWorkoutModel[] | null>([]);
const workoutDataErrors = ref(false);

onBeforeMount(async () => {

  const { data, hasError } = await getData<IWorkoutModel[]>(
    'http://127.0.0.1:8080/workouts/get-users-workouts?email=' + localStorage.getItem('email')
  );

  workoutData.value = data.value;
  workoutDataErrors.value = hasError.value;

  if (data.value) {
    useModalStore().setIsPlanYourWorkoutModalActive(false)
  }
});
</script>

<template>
  <div class="card-wrapper">
    <div v-for="item in workoutData" class="cards">
      <h3 class="font text-white">{{ item.name }}</h3>
    </div>
    <div class="plus">
      <button @click="useModalStore().setCreateYourWorkoutModalValue(true)" type="button" class="plus-btn">
        <img src="../../assets/img/logos/add-icon.png" height="40" alt="add-button" />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/workout-components/workout-card-component.css";
</style>