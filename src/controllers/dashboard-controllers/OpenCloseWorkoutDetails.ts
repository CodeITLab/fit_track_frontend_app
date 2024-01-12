import { useModalManager } from "@/store/ModalManager";
import { useWorkoutDataStore } from "@/store/WorkoutData";
import { IWorkoutModel } from "@/models/IWorkoutModel";

const workoutStore = useWorkoutDataStore();
const modalStore = useModalManager();

export const OpenCloseWorkoutDetails = (
    selectedWorkout: IWorkoutModel,
    index: number
  ) => {
    workoutStore.createSelectedWorkout(selectedWorkout);
    workoutStore.createEorkoutIndex(index);
    modalStore.openCloseWorkoutDetail;
  };