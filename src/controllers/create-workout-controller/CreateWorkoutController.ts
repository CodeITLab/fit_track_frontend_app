import { StoreAccessController } from "../store-access/StoreAccessController";

export const CreateWorkoutController = () => {

    const getWorkoutData = StoreAccessController().workoutStore.getSelectedWorkout;

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

    return {
        increaseNumberOfExercises,
        increaseNumberOfReps
    }
}