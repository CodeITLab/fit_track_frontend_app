import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";


export const WorkoutStatusHelper =()=>{
   const workouts = StoreAccessController().workoutStore.defaultWorkoutData.exerciseData;
   for(let i =0; i<workouts.length; i++){
    console.log (workouts[i].isWorkoutFinished)
   }
}