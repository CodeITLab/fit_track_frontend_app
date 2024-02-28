export interface IWorkoutModel {
    workoutName: string,
    workoutOwner: number,
    exerciseData: IExerciseModel[],
}

export interface IExerciseModel {
    exerciseName: string,
    sets: number,
    reps: number,
    isWorkoutFinished: boolean
}