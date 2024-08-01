import {INotifications} from "@/models/INotifications";

export interface IUser {
    name: string,
    lastName: string,
    email: string,
    picture:string,
    isAuth: boolean,
    userType:string
    password: string
    notificationsData: INotifications[]
}