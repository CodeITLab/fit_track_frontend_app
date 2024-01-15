export interface IWorkoutModel {
    workoutName: string,
    exerciseData: IExerciseModel[],
}

export interface IExerciseModel {
    exerciseName: string,
    sets: number,
    reps: number,
    isWorkoutFinished: boolean
}