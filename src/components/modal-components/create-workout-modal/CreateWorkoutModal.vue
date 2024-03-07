<script lang="ts" setup>
import { useModalStore } from '@/store/modalStore';
import { ref } from 'vue';

const submitted = ref(false)

const closeModal = () => {
    useModalStore().setCreateYourWorkoutModalValue(false);
    // zbog linije ispod se otvaral Plan Your Exercise button kad sam stisnul close na Ovo je workout Modal, zakomentiral sam ju samo za svaki slučaj. Ali mislim kolko sad vidim na prvu da nam ne treba tu.
    // useModalStore().setIsPlanYourWorkoutModalActive(true);
}

const submit = (values: string) => {
    console.log(values)
}

</script>

<template>
    <div class="container-fluid create-workout-modal" v-if="useModalStore().getCreateWorkoutModalValue">
        <FormKit type="form" submit-label="Create Your Workout" @submit="submit">
            <FormKit name="workoutName" label="Workout Name" validation="required" />
            <FormKit type="list" :value="[{}]" dynamic #default="{ items, node, value }">
                <FormKit type="group" v-for="(item, index) in items" :key="item" :index="index">
                    <div class="group">
                        <FormKit type="text" name="name" label="Exercise name" placeholder="Exercise name" validation="required" />

                        <FormKit type="number" name="sets" label="Sets" validation="required" />
                        <FormKit type="number" name="reps" label="Reps" validation="required" />

                        <button type="button" @click="() => node.input(value?.filter((_, i) => i !== index))"
                            class="border border-blue-600 text-blue-600 p-3">
                            - Remove
                        </button>
                    </div>
                </FormKit>

                <button type="button" @click="() => node.input(value?.concat({}))"
                    class="border border-blue-600 text-blue-600 p-3 mb-4">
                    + Add another
                </button>
            </FormKit>
        </FormKit>
        <button @click="closeModal">Close</button>
    </div>
</template>

<style lang="css" scoped>
@import "/src/assets/css/components/modals-components/create-workout-modal/create-workout-modal.css"
</style>