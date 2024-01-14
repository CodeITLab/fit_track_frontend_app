import { IWorkoutModel } from "@/models/IWorkoutModel";
import { StoreAccessController } from "../store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

export const CreateWorkoutController = (props: { isUserNew: boolean }) => {

  const getWorkoutData =
    StoreAccessController().workoutStore.getSelectedWorkout;

  const defaultWorkoutData: IWorkoutModel = {
    workoutName: "",
    exerciseData: [
      {
        exerciseName: "",
        sets: 0,
        reps: 0,
      },
    ],
  }

  const workoutData = props.isUserNew ? defaultWorkoutData : getWorkoutData;

  const increaseNumberOfExercises = (): void => {
    workoutData.exerciseData.push({
      exerciseName: "",
      sets: 0,
      reps: 0,
    });
  };

  const increaseNumberOfReps = (index: number): void => {
    workoutData.exerciseData[index].reps += 1;
  };

  const decreaseNumberOfReps = (index: number): void => {
    if (workoutData.exerciseData[index].reps > 0) {
      workoutData.exerciseData[index].reps -= 1;
    }
  };

  const increaseNumberOfSets = (index: number): void => {
    workoutData.exerciseData[index].sets += 1;
  };

  const decreaseNumberOfSets = (index: number): void => {
    if (workoutData.exerciseData[index].sets > 0) {
      workoutData.exerciseData[index].sets -= 1;
    }
  };

  const removeExercise = (index: number): void => {
    if (workoutData.exerciseData.length > 0) {
      workoutData.exerciseData.splice(index, 1);
    }
  };

  const saveWorkoutData = (): void => {
    StoreAccessController().workoutStore.createSelectedWorkout(workoutData);
    ModalController().setModalValue(false);
  };

  const updateWorkoutData = (): void => {
    StoreAccessController().workoutStore.updateSelectedWorkout(workoutData);
    ModalController().setModalValue(false);
  };

  const deleteWorkoutData = (): void => {
    StoreAccessController().workoutStore.deleteSelectedWorkout();
    ModalController().setModalValue(false);
  };

  return {
    defaultWorkoutData,
    increaseNumberOfExercises,
    decreaseNumberOfReps,
    increaseNumberOfReps,
    increaseNumberOfSets,
    decreaseNumberOfSets,
    removeExercise,
    saveWorkoutData,
    updateWorkoutData,
    deleteWorkoutData,
  };
};
