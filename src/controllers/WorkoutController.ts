// src/controllers/ExampleController.ts
import ApiService from '@/api/apiService';
import {useWorkoutStore} from "@/store/workoutStore";
import {IWorkoutModel} from "@/models/IWorkoutModel";

class WorkoutController {
    public async fetchData(email?: string): Promise<void> {
        try {
            const response = await ApiService.get<IWorkoutModel[]>("workouts/get-users-workouts?email=" + email);
            useWorkoutStore().saveWorkoutData(response);
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    public async createData(data: IWorkoutModel): Promise<void> {
        try {
            await ApiService.post('/data', data);
        } catch (error) {
            console.error('Error creating data', error);
            throw error;
        }
    }

    public async updateData(id: number, data: IWorkoutModel): Promise<void> {
        try {
            const response = await ApiService.put(`/data/${id}`, data);
        } catch (error) {
            console.error('Error updating data', error);
            throw error;
        }
    }

    public async deleteData(id: number): Promise<any> {
        try {
            await ApiService.delete(`/data/${id}`);
        } catch (error) {
            console.error('Error deleting data', error);
            throw error;
        }
    }
}

export default new WorkoutController();
