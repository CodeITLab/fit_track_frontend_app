import {useUserDataStore} from "../../store/UserData"

export const UserDataControler =()=>{
    const dataStore = useUserDataStore().user;

    return{
    dataStore,
    }
}

