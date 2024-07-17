<script lang="ts" setup>
import router from "@/router";
import { useUserStore } from "@/store/userStore";
import ModalManager from "@/controllers/ModalManagerController";
import WorkoutController from "@/controllers/WorkoutController";

const updateUserType = (type: string): void => {
  useUserStore().updateUserType(type);
  WorkoutController.saveUserInfo(useUserStore().getUserData);
  ModalManager().UpdateCurrentModalValue("userTypeModal", false);
  router.push("/dashboard");
};
</script>

<template>
  <div class="container user-type">
    <div class="card">
      <div class="card-header">
        <p>Vrste korištenja aplikacije</p>
      </div>
      <div class="card-body">
        <p>
          "<span class="highlighted fw-bold">Osobno</span>" znači da ćete za sebe moći kreirati programe, pratiti
          analitiku i ostale metrike unutar aplikacije.
        </p>
        <p>
          "<span class="highlighted fw-bold">Kao trener</span>" omogućuje sve što nudi i "osoban" stil, plus mogućnost
          kreiranja treninga za grupe ljudi uz detaljniju analitiku i praćenje
          progresa.
        </p>
        <button
          @click="updateUserType('personal')"
          type="button"
          class="btn btn-outline-primary me-4"
        >
          Osobno
        </button>
        <button
          @click="updateUserType('trainer')"
          type="button"
          class="btn btn-outline-primary"
        >
          Kao trener
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/components/modals-components/user-type/user-type.css";
</style>
