export interface IWorkoutModel {
    name: string,
    workoutOwner: string,
    exercisesData: IExerciseModel[],
}

export interface IExerciseModel {
    name: string,
    sets: number,
    reps: number,
    isWorkoutFinished: boolean
}