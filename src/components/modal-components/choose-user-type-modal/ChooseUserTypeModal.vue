<script lang="ts" setup>
import router from "@/router";
import { saveUserData } from "@/api/useFetch";
import { useUserStore } from "@/store/userStore";
import { useModalStore } from "@/store/modalStore";
import ModalManager from "@/controllers/ModalManagerController";

const updateUserType = (type: string): void => {
  useUserStore().updateUserType(type);
  saveUserData(useUserStore().getUserData).saveUserData();
  ModalManager().UpdateCurrentModalValue("userTypeModal", false);
  router.push("/dashboard");
};
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Vrste korištenja aplikacije</div>
      <div class="card-body">
        <h5 class="card-title">
          Odaberite kako bi htjeli koristiti aplikaciju:
        </h5>
        <p class="card-text">
          "Osobno" znači da ćete za sebe moći kreirati programe, pratiti
          analitiku i ostale metrike unutar aplikacije.
        </p>
        <p>
          "Kao trener" omogućuje sve što nudi i "osoban" stil, plus mogućnost
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
