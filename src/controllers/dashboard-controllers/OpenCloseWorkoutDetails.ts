import { StoreAccessController } from "../store-access/StoreAccessController";
import { IWorkoutModel } from "@/models/IWorkoutModel";

export const OpenCloseWorkoutDetails = (
    selectedWorkout: IWorkoutModel,
    index: number
  ) => {
    StoreAccessController().workoutStore.createSelectedWorkout(selectedWorkout);
    StoreAccessController().workoutStore.createEorkoutIndex(index);
    StoreAccessController().modalStore.openCloseWorkoutDetail;
  };