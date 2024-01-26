import {useUserDataStore} from "../../store/UserData"

export const UserDataControler =()=>{
    const dataStore = useUserDataStore().user;
    const dataUsers = useUserDataStore().users

    return{
    dataStore,
    dataUsers
    }
}

