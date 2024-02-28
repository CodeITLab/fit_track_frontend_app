import { StoreAccessController } from "../store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { WorkoutStatusHelper } from "@/helpers/WorkoutStatusHelper";

export const WorkoutsController = () => {

  const getSelectedWorkoutData = StoreAccessController().workoutStore.getSelectedWorkout;
  const defaultWorkoutData = StoreAccessController().workoutStore.getDefaultWorkoutData;

  const workoutData = getSelectedWorkoutData.name ? getSelectedWorkoutData : defaultWorkoutData;

  const increaseNumberOfExercises = (): void => {
    workoutData.exercisesData.push({
      name: "",
      sets: 0,
      reps: 0,
      isWorkoutFinished: false
    });
  };

  const increaseNumberOfReps = (index: number): void => {
    workoutData.exercisesData[index].reps += 1;
  };

  const decreaseNumberOfReps = (index: number): void => {
    if (workoutData.exercisesData[index].reps > 0) {
      workoutData.exercisesData[index].reps -= 1;
    }
  };

  const increaseNumberOfSets = (index: number): void => {
    workoutData.exercisesData[index].sets += 1;
  };

  const decreaseNumberOfSets = (index: number): void => {
    if (workoutData.exercisesData[index].sets > 0) {
      workoutData.exercisesData[index].sets -= 1;
    }
  };

  const removeExercise = (index: number): void => {
    if (workoutData.exercisesData.length > 0) {
      workoutData.exercisesData.splice(index, 1);
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
