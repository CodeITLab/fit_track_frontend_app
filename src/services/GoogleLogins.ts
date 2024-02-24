// 1. ovdje ubaci sve pozive prema Google-u, znači fetch ili axios pozive
import { googleSdkLoaded } from "vue3-google-login";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { useUserDataStore } from "@/store/UserData";
import {GoogleCredantials} from "../env"
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";
import axios from "axios";
import { storeToRefs } from "pinia";
import { IUser } from "@/models/IUser";
 // eslint-disable-next-line @typescript-eslint/no-unused-vars

export const login = (): void => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: GoogleCredantials().google_client_id ,
        scope: "email profile openid",
        redirect_uri: "http://localhost:8080/oauth2/callback/google",
        callback: (response) => {
          if (response.code) {
            sendCodeToBackend(response.code);
            
            ModalController().setLoginFormModalValue(false)
            ModalController().setChoseDashboardValue(true)
          }
        },
      })
      .requestCode();
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendCodeToBackend = async (code: any) => {
  try {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: GoogleCredantials().google_client_id,
      client_secret: GoogleCredantials().google_client_secret,
      redirect_uri: "postmessage",
      grant_type: "authorization_code",
    });
   
    const accessToken = response.data.access_token;

    // Fetch user details using the access token
    const userResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (userResponse && userResponse.data) {
      // Set the userDetails data property to the userResponse object
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userData: IUser = {
        name: userResponse.data['given_name'],
        lastName: userResponse.data['family_name'],
        email: userResponse.data['email'],
        picture: userResponse.data['picture'],
        isAuth: true,
        userType: ''
      }
      
      StoreAccessController().userStore.updateUserInfo({...userData});
    } else {
      // Handle the case where userResponse or userResponse.data is undefined
      console.error("Failed to fetch user details.");
    }
  } catch (error) {
   console.log("Failed to fetch")
  }
};
