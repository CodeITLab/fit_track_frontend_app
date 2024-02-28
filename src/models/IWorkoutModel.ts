export interface IWorkoutModel {
    name: string,
    workoutOwner: number,
    exercisesData: IExerciseModel[],
}

export interface IExerciseModel {
    name: string,
    sets: number,
    reps: number,
    isWorkoutFinished: boolean
}