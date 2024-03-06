<script lang="ts" setup>
import { useModalStore } from '@/store/modalStore';

const closeModal = () => {
    useModalStore().setCreateYourWorkoutModalValue(false);
    useModalStore().setIsPlanYourWorkoutModalActive(true);
}

</script>

<template>
    <div class="container-fluid create-workout-modal" v-if="useModalStore().getCreateWorkoutModalValue">
        <p>Ovo je workout modal.</p>
        <button @click="closeModal">Close</button>
    </div>
</template>

<style lang="css" scoped>
@import "/src/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css"
</style>