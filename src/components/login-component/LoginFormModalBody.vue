<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";

const setValueToFalse = (): void => {
 ModalController().setLoginFormModalValue(false)
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
          <label class="m-2" for="Chose dashboard type">Dashboard Type</label>
        </div>
        <div>
          <button type="button" class="btn btn-secondary m-2" @click="setValueToFalse"> <router-link class="nav-link links p-1 text-decoration-none"
                           to="/dashboard">Trainer</router-link></button>
          <button type="button" class="btn btn-primary m-2" @click="setValueToFalse"> <router-link class="nav-link links p-1 text-decoration-none"
                           to="/dashboard">Personal</router-link></button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<style>
</style>