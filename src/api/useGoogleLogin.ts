// 1. ovdje ubaci sve pozive prema Google-u, znači fetch ili axios pozive
import { googleSdkLoaded } from "vue3-google-login";
import { GoogleCredantials } from "../env";
import axios from "axios";
import { IUser } from "@/models/IUser";
import { useUserStore } from "@/store/userStore";
import { useModalStore } from "@/store/modalStore";
import ModalManager from "@/controllers/ModalManagerController";
import {INotifications} from "@/models/INotifications";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const login = (): void => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: GoogleCredantials().google_client_id,
        scope: "email profile openid",
        redirect_uri: "http://localhost:8080/oauth2/callback/google",
        callback: (response) => {
          if (response.code) {
            sendCodeToBackend(response.code);
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
        name: userResponse.data["given_name"],
        lastName: userResponse.data["family_name"],
        email: userResponse.data["email"],
        picture: userResponse.data["picture"],
        isAuth: true,
        userType: "",
        password: "",
        notificationsData: [{title: "aaa", flag: "jsdjs", body: "uiiuii"}]
      };

      localStorage.setItem("isAuth", "true");
      useUserStore().saveUserData(userData);
      ModalManager().UpdateCurrentModalValue("userTypeModal", true);
    } else {
      // Handle the case where userResponse or userResponse.data is undefined
      console.error("Failed to fetch user details.");
    }
  } catch (error) {
    console.log("Failed to fetch");
  }
};

