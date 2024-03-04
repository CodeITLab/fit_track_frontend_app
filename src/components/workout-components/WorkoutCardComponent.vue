<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IWorkoutModel } from '@/models/IWorkoutModel';
import { useUserStore } from '@/store/userStore';
import { onBeforeMount, ref } from 'vue';

const workoutData = ref<IWorkoutModel[] | null>([]);
const workoutDataErrors = ref(false);

onBeforeMount(async () => {

const { data, hasError } = await getData<IWorkoutModel[]>(
  'http://127.0.0.1:8080/workouts/get-users-workouts?email=' + localStorage.getItem('email')
);

workoutData.value = data.value;
workoutDataErrors.value = hasError.value;
});

</script>

<template>
    <p v-for="item in workoutData">{{ item.name }}</p>
</template>

<style></style>