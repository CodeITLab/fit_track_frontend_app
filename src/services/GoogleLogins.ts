// 1. ovdje ubaci sve pozive prema Google-u, znači fetch ili axios pozive
import { googleSdkLoaded } from "vue3-google-login";
import {UserDataControler} from "../controllers/user-controllers/UserControler";
import axios from "axios";

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 
 let userDetails = UserDataControler().dataStore;

export const login = (): void => {
  
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: "586701-d2i0.apps.googleusercontent.com",
        scope: "email profile openid",
        redirect_uri: "http://localhost:4000/auth/callback",
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
      client_id: "58730101-di0.apps.googleusercontent.com",
      client_secret: "GOCSPX-u02eNidw0DqWutQVi",
      redirect_uri: "postmessage",
      grant_type: "authorization_code",
    });

    const accessToken = response.data.access_token;
    console.log(accessToken);

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
      userDetails = userResponse.data;
    } else {
      // Handle the case where userResponse or userResponse.data is undefined
      console.error("Failed to fetch user details.");
    }
  } catch (error) {
   console.log("Failed to fetch")
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any


// 2. također, ovdje importaj kontrolere koji će spremati user data - ime, prezime, fotku profila itd. u UserData.ts store.

// 3. ako nisi (a nisi), moraš kreirati te kontrolere u zasebnom folderu koji možeš nazvati user-controllers pod controllers folderom.

// 4. client ID i secret se nalaze u .env datoteci, njima možeš pristupiti tako da samo importaš taj file u servis i napišeš env.vrijednost koja ti treba. ja sam ih sad interno spremio na Github kao secret, pitanje je hoće li ovako raditi, možda ti neće. moramo isprobati.
// morati ćemo naći drugačiji način da sakrijemo client id i client secret jer oni nikako ne bi smjeli biti na frontendu i ne bi se smjeli vidjeti ni na koji način. kada se deploya frontend na neki server, Heroku ili Amazon Web Servise, onda ćemo tamo interno to pohraniti da se ne vide.

// Bonus points:

// - treba warning-banner-component prebaciti u zaseban folder, modal-component, i popraviti importe.

