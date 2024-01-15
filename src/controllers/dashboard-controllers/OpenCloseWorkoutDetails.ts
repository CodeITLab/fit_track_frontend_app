import { StoreAccessController } from "../store-access/StoreAccessController";
import { IWorkoutModel } from "@/models/IWorkoutModel";

export const OpenCloseWorkoutDetails = (
    selectedWorkout: IWorkoutModel,
    index: number
  ) => {
    StoreAccessController().workoutStore.createSelectedWorkout(selectedWorkout);
    StoreAccessController().workoutStore.setWorkoutIndex(index);
    StoreAccessController().modalStore.openCloseWorkoutDetail;
  };