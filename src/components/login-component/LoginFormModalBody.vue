<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import GoogleLoginsModalBody from "./GoogleLoginsModalBody.vue";

const setValueToFalse = (): void => {
  ModalController().setChoseTrainerValue(true);
  ModalController().setLoginFormModalValue(false);
};
</script>
<template>
  <tbody>
    <tr>
      <td colspan="5">
        <div class="login-lable">
          <label class="m-2 text-muted" for="Chose dashboard type">Login</label>
        </div>
        <div
          class="modal-body d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <GoogleLoginsModalBody />
            <!-- <button
              type="button"
              class="btn btn-primary m-2"
              @click="setValueToFalse"
            >
              Trainer
            </button>
            Or
            <button
              type="button"
              class="btn btn-primary m-2"
              @click="setValueToFalse"
            >
              <router-link
                class="nav-link links p-1 text-decoration-none"
                to="/dashboard"
                >Personal</router-link
              >
            </button> -->
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<style>
@import "../../assets/css/components/google-login.css";
</style>