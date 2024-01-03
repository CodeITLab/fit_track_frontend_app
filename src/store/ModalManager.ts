import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            createWorkoutModal: false,
            workoutDetails: false
            //isOpened state preimenovati u create workout modal
            //dodadti drugi state za workout details modal FALSE    
        }
    },
    actions: {
        openCloseCreateWorkoutModal(value: boolean) {
            this.createWorkoutModal = value
            //proširiti funkcijku tako da prima dodatan parametar koji će biti ime modala
            //onda će ona postaviti state po imenu modala na strate koji smo mi proslijedili
        },
        openCloseWorkoutDetail(value:boolean){
            this.workoutDetails= value
        }
    }
})