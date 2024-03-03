<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IWorkoutModel } from '@/models/IWorkoutModel';
import { useModalStore } from '@/store/modalStore';
import { useUserStore } from '@/store/userStore';
import { onBeforeMount, ref } from 'vue';

let hasUserCreatedAnyWorkouts = ref<boolean | undefined>(false);

onBeforeMount(async () => {
    const { data, hasError } = await getData<IWorkoutModel>(
        'http://127.0.0.1:8080/workouts/get-users-workouts?email=' + useUserStore().getUserData.email
    );

    if (data.value?.name !== "") {
        hasUserCreatedAnyWorkouts.value = true;
    }

});

</script>

<template>
    <div class="d-flex justify-content-center align-items-center workout-modal">
        <div v-if="!hasUserCreatedAnyWorkouts">
            <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
        </div>
        <button @click="useModalStore().setCreateWorkoutModalValue(true)" type="button" class="plus-btn">
            <img src="../../assets/img/logos/add-icon.png" height="40" alt="add-button" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/create-workout-button.css";
</style>