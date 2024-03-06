<script lang="ts" setup>
import { useModalStore } from '@/store/modalStore';

</script>

<template>
    <div class="container-fluid" v-if="useModalStore().getCreateWorkoutModalValue">
        <div class="create-workout-modal">
            <p>Ovo je workout modal.</p>
        </div>
    </div>
</template>

<style></style>