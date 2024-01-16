import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            createWorkoutModal: false,
            workoutDetailsModal: false,
            workoutStatusCheck: false,
        }
    },
    getters: {
        getWorkoutDetailsModalState(state) {
            return state.workoutDetailsModal
        },
        getWrkourStatusCheck(state){
            return state.workoutStatusCheck
        }
    },
    actions: {
        openCloseCreateWorkoutModal(value: boolean) {
            this.createWorkoutModal = value
        },
        openCloseWorkoutDetail(value: boolean) {
            this.workoutDetailsModal = value
        },
        openCloseWorkoutStatusCheckBanner(value: boolean) {
            this.workoutStatusCheck = value
        }
    }
})