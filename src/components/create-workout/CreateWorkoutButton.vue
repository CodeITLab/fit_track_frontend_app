<script lang="ts" setup>

import { useModalStore } from '@/store/modalStore';
import { computed } from 'vue';

const hasUserActivedLogout = computed(() => {
    return useModalStore().getLogoutModalValue;
})

</script>

<template>
    <div class="d-flex justify-content-center align-items-center workout-modal" v-if="!hasUserActivedLogout">
        <div>
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