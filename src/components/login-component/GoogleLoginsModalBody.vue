<script lang="ts" setup>
import { GoogleLogin } from "vue3-google-login";
import { login } from "../../services/GoogleLogins";
import { UserDataControler } from "../../controllers/user-controllers/UserControler";
</script>

<template>
  <tbody>
    <tr>
      <td colspan="5">
        <div>
          <button @click="login">Login Using Google</button>
          <div v-if="login().">
            <h2>User Details</h2>
            <p>Name: {{ UserDataControler().dataStore.user.name }}</p>
            <p>Email: {{ userDetails.email }}</p>
            <p>
              Profile Picture:
              <img :src="userDetails.picture" alt="Profile Picture" />
            </p>
          </div>
        </div>
        <!-- <div
          class="modal-body d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <GoogleLogin :login="callback" />
          </div>
        </div> -->
      </td>
    </tr>
  </tbody>
</template>


<style>
</style>