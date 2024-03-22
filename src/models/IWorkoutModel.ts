export interface IWorkoutModel {
  id?: number | undefined;
  name: string | undefined;
  workoutOwner: string | undefined;
  exercisesData: IExerciseModel[] | undefined;
}

export interface IExerciseModel {
  name: string | undefined;
  sets: number | undefined;
  reps: number | undefined;
  isWorkoutFinished: boolean | undefined;
}
