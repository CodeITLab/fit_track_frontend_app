import { useModalManager } from "@/store/ModalManager";
import { useUserDataStore } from "@/store/UserData";
import { useWorkoutDataStore } from "@/store/WorkoutData";

export const StoreAccessController = () => {
    const workoutStore = useWorkoutDataStore();
    const modalStore = useModalManager();
    const userStore = useUserDataStore();

    return { workoutStore, modalStore, userStore }
}