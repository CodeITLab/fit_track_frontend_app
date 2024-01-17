import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

export const WorkoutStatusHelper =()=>{
   
   const workouts = StoreAccessController().workoutStore.defaultWorkoutData.exerciseData;
   for(let i =0; i<workouts.length; i++){
    if(workouts[i].isWorkoutFinished === false){
        ModalController().setWorkoutStatusCheckValue(true)
    }
   }
}