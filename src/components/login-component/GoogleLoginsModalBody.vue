<script lang="ts" setup>
import { GoogleLogin } from "vue3-google-login";
import { login } from "../../services/GoogleLogins";
import { UserDataControler } from "../../controllers/user-controllers/UserControler";
</script>

<template>
  <tbody>
    <tr>
      <td colspan="5">
        <div class="login-wrapper d-flex flex-column">
          <input type="text" class="email m-2" placeholder="Your Email" />
          <input type="text" class="password m-2" placeholder="Your Password" />
          <div class="d-flex justify-content-end w-100">
            <a class="m-3 text-decoration-none" href="">Forgot Password?</a>
          </div>
          <button class="btn btn-primary m-2" type="button" @click="login">
            Login Using Google
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>


<style>
@import "../../assets/css/components/google-login.css";
</style>