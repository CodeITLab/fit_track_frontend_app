<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "../../controllers/modal-controllers/ModalController";
</script>

<template>
  <tbody>
    <tr>
      <td>
        <div>
          <button type="button" class="btn btn-primary m-2">
            <router-link
              class="nav-link links p-1 text-decoration-none"
              to="/dashboard"
              >Trainer</router-link
            >
          </button>
          Or
          <button type="button" class="btn btn-primary m-2">
            <router-link
              class="nav-link links p-1 text-decoration-none"
              to="/dashboard"
              >Personal</router-link
            >
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>



<style>
</style>