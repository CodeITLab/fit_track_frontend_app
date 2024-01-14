import { IWorkoutModel } from "@/models/IWorkoutModel";
import { StoreAccessController } from "../store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

export const UpdateWorkoutController = () => {

  const getWorkoutData =
    StoreAccessController().workoutStore.getSelectedWorkout;

  const increaseNumberOfExercises = (): void => {
    getWorkoutData.exerciseData.push({
      exerciseName: "",
      sets: 0,
      reps: 0,
    });
  };

  const increaseNumberOfReps = (index: number): void => {
    getWorkoutData.exerciseData[index].reps += 1;
  };

  const decreaseNumberOfReps = (index: number): void => {
    if (getWorkoutData.exerciseData[index].reps > 0) {
      getWorkoutData.exerciseData[index].reps -= 1;
    }
  };

  const increaseNumberOfSets = (index: number): void => {
    getWorkoutData.exerciseData[index].sets += 1;
  };

  const decreaseNumberOfSets = (index: number): void => {
    if (getWorkoutData.exerciseData[index].sets > 0) {
      getWorkoutData.exerciseData[index].sets -= 1;
    }
  };

  const removeExercise = (index: number): void => {
    if (getWorkoutData.exerciseData.length > 0) {
      getWorkoutData.exerciseData.splice(index, 1);
    }
  };

  const updateWorkoutData = (): void => {
    StoreAccessController().workoutStore.updateSelectedWorkout(getWorkoutData);
    ModalController().setWorkoutDetailsModalValue(false);
  };

  const deleteWorkoutData = (): void => {
    StoreAccessController().workoutStore.deleteSelectedWorkout();
    ModalController().setWorkoutDetailsModalValue(false);
  };

  return {
    getWorkoutData,
    increaseNumberOfExercises,
    decreaseNumberOfReps,
    increaseNumberOfReps,
    increaseNumberOfSets,
    decreaseNumberOfSets,
    removeExercise,
    updateWorkoutData,
    deleteWorkoutData,
  };
};
