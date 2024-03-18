import { useWorkoutStore } from "@/store/workoutStore";

const SetSelectedWorkout = (id: number) => {
  const filteredWorkout = useWorkoutStore().getWorkoutData?.filter(
    (item, index) => index === id
  );

  if (filteredWorkout !== undefined) {
    console.log(filteredWorkout[0]);
    useWorkoutStore().saveSelectedWorkout(filteredWorkout[0])
  }
}

export default SetSelectedWorkout;