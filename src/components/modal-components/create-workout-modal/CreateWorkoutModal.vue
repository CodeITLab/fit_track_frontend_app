<script lang="ts"
        setup>
        import { useModalStore } from '@/store/modalStore';

        const closeModal = () => {
            useModalStore().setCreateYourWorkoutModalValue(false);
            // zbog linije ispod se otvaral Plan Your Exercise button kad sam stisnul close na Ovo je workout Modal, zakomentiral sam ju samo za svaki slučaj. Ali mislim kolko sad vidim na prvu da nam ne treba tu.
            // useModalStore().setIsPlanYourWorkoutModalActive(true);
        }

</script>

<template>
    <div class="container-fluid create-workout-modal"
         v-if="useModalStore().getCreateWorkoutModalValue">
        <p>Ovo je workout modal.</p>
        <button @click="closeModal">Close</button>
    </div>
</template>

<style lang="css"
       scoped>
    @import "/src/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css"
</style>