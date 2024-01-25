import { StoreAccessController } from "../store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { WorkoutStatusHelper } from "@/helpers/WorkoutStatusHelper";

export const WorkoutsController = () => {

  const getSelectedWorkoutData = StoreAccessController().workoutStore.getSelectedWorkout;
  const defaultWorkoutData = StoreAccessController().workoutStore.getDefaultWorkoutData;

  const workoutData = getSelectedWorkoutData.workoutName ? getSelectedWorkoutData : defaultWorkoutData;

  const increaseNumberOfExercises = (): void => {
    workoutData.exerciseData.push({
      exerciseName: "",
      sets: 0,
      reps: 0,
      isWorkoutFinished: false
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
    StoreAccessController().workoutStore.createWorkout(workoutData);
    ModalController().setCreateWorkoutModalValue(false);
    console.log(StoreAccessController().workoutStore.getWorkouts)
  };

  const updateWorkoutData = (): void => {
    if (!StoreAccessController().modalStore.getWrkourStatusCheck) {
      WorkoutStatusHelper();
    } else {
      StoreAccessController().workoutStore.updateSelectedWorkout(workoutData);
      ModalController().setWorkoutDetailsModalValue(false);
      ModalController().setWorkoutStatusCheckValue(false)
      console.log(StoreAccessController().modalStore.getWrkourStatusCheck);
    }
  };

  const deleteWorkoutData = (): void => {
    StoreAccessController().workoutStore.deleteSelectedWorkout();
    ModalController().setWorkoutDetailsModalValue(false);
  };

  return {
    increaseNumberOfExercises,
    decreaseNumberOfReps,
    increaseNumberOfReps,
    increaseNumberOfSets,
    decreaseNumberOfSets,
    removeExercise,
    updateWorkoutData,
    saveWorkoutData,
    deleteWorkoutData,
  };
};
