<script lang="ts" setup>
import { login } from "@/services/GoogleLogin";
import { GoogleLogin } from "vue3-google-login";
const callback = (response: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
};
</script>

<template>
  <tbody>
    <tr>
      <td colspan="5">
        <div
          class="modal-body d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <GoogleLogin :login="callback" />
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>


<style>
</style>