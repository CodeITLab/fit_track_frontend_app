import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

export const WorkoutStatusHelper =()=>{
   
   const workouts = StoreAccessController().workoutStore.defaultWorkoutData.exerciseData;
   for(let i =0; i<workouts.length; i++){
    if(workouts[i].isWorkoutFinished === true){
        ModalController().setWorkoutStatusCheckValue(true)
    }else{
        ModalController().setWorkoutStatusCheckValue(false)
    }
        console.log(workouts[i].isWorkoutFinished)
        console.log(StoreAccessController().modalStore.workoutStatusCheck)
   }
}