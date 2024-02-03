<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import GoogleLoginsModalBody from "./GoogleLoginsModalBody.vue";
</script>
<template>
  <tbody>
    <tr>
      <td colspan="5">
        <div class="d-flex justify-content-end m-2">
          <img type=button
               @click="ModalController().setLoginFormModalValue(false)"
               src="../../assets/img/icons/x-circle-fill.svg"
               height="20"
               alt="x-circle">
        </div>

        <div class="login-lable">
          <label class="login-title m-2 text-muted"
                 for="Chose dashboard type">Login</label>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center align-items-center">
          <div>
            <GoogleLoginsModalBody />
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<style>
@import "../../assets/css/components/google-login.css";
</style>