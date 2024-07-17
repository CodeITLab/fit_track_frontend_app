import ApiService from '@/api/apiService';
import {useWorkoutStore} from "@/store/workoutStore";
import {IWorkoutModel} from "@/models/IWorkoutModel";
import {IUser} from "@/models/IUser";
import {useUserStore} from "@/store/userStore";

class WorkoutController {
    public async fetchData(): Promise<void> {
        try {
            const email = localStorage.getItem("email") || "";
            const response = await ApiService.get<IWorkoutModel[]>("workouts/get-users-workouts?email=" + email);
            useWorkoutStore().saveWorkoutData(response);
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    public async fetchUserByEmail(email: string): Promise<void> {
        try {
            const response = await ApiService.get<IUser>("user/get-user-by-email?email=" + email);
            useUserStore().saveUserData(response);
        } catch (error) {
            console.error('Error creating data', error);
            throw error;
        }
    }

    public async saveUserInfo(data: IUser): Promise<void> {
        try {
            await ApiService.post("/user/save-user-data", data);
            await this.fetchData();
            await this.fetchUserByEmail(data.email);
        } catch (error) {
            console.error('Error creating data', error);
            throw error;
        }
    }

    public async createData(data: IWorkoutModel): Promise<void> {
        try {
            await ApiService.post('/workouts/save-workout-data', data);
            await this.fetchData();
        } catch (error) {
            console.error('Error creating data', error);
            throw error;
        }
    }

    public async updateData(data: IWorkoutModel): Promise<void> {
        try {
            const id = useWorkoutStore().getSelectedWorkout["id"];
            await ApiService.put(`workouts/update-user-workout?id=${id}`, data);
            await this.fetchData();
        } catch (error) {
            console.error('Error updating data', error);
            throw error;
        }
    }

    public async deleteData(): Promise<void> {
        try {
            const id = useWorkoutStore().getSelectedWorkout["id"];
            await ApiService.delete(`/workouts/delete-user-workout?id=${id}`);
            await this.fetchData();
        } catch (error) {
            console.error('Error deleting data', error);
            throw error;
        }
    }
}

export default new WorkoutController();
