import { useWorkoutStore } from "@/store/workoutStore";

const UpdateWorkoutDataController = () => {
  const addExercise = () => {
    useWorkoutStore().selectedWorkout?.exercisesData?.push({
      name: "",
      sets: 0,
      reps: 0,
      isWorkoutFinished: false,
    });
  };

  const removeExercise = (id: number) => {
    useWorkoutStore().selectedWorkout?.exercisesData?.splice(id, 1);
  };

  return {
    addExercise,
    removeExercise,
  };
};

export default UpdateWorkoutDataController;
