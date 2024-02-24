import { useUserDataStore } from "@/store/UserData";
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

export const UserAuthController = () => {

    // ovdje ćemo raditi pozive prema backendu i raditi login preko googlea
    
    // moramo dohvatiti store vrijednosti da možemo raditi nad user objektom

    if(useUserDataStore().defaultUserData.isAuth){
        StoreAccessController().userStore.initData(true);
    }else{
        StoreAccessController().userStore.initData(false);
    }



    // ako sve prođe dobro i dobijemo token od backenda, onda ćemo postaviti sve user podatke u store-u
    // zasad samo za potrebe testa protected route-a, postavljamo auth varijablu na false
    
}