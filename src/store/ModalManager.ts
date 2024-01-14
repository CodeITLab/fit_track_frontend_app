import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            createWorkoutModal: false,
            workoutDetailsModal: false,
        }
    },
    getters: {
        getWorkoutDetailsModalState(state) {
            return state.workoutDetailsModal
        }
    },
    actions: {
        openCloseCreateWorkoutModal(value: boolean) {
            this.createWorkoutModal = value
        },
        openCloseWorkoutDetail(value: boolean) {
            this.workoutDetailsModal = value
        }
    }
})