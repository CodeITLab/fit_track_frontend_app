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
          <button class="btn" @click="login">Login Using Google</button>
        </div>
      </td>
    </tr>
  </tbody>
</template>


<style>
</style>