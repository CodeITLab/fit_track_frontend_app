import { useModalManager } from "@/store/ModalManager";
import { useWorkoutDataStore } from "@/store/WorkoutData";

export const StoreAccessController = () => {
    const workoutStore = useWorkoutDataStore();
    const modalStore = useModalManager();

    return { workoutStore, modalStore }
}