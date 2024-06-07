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
          Odaberite kako bi htjeli koristiti aplikaciju
        </h5>
        <p class="card-text">
          "Osnovni stil" znači da ćete za sebe moći kreirati programe, pratiti
          analitiku i ostale metrike unutar aplikacije.
        </p>
        <p>
          "Trener stil" omogućuje sve što nudi i osnovni stil, plus mogućnost
          kreiranja treninga za grupe ljudi uz detaljniju analitiku i praćenje
          progresa.
        </p>
        <button
          @click="updateUserType('personal')"
          type="button"
          class="btn btn-outline-primary me-4"
        >
          Osnovni stil
        </button>
        <button
          @click="updateUserType('trainer')"
          type="button"
          class="btn btn-outline-primary"
        >
          Trener stil
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
