<script lang="ts" setup>
import router from "@/router";
import { useModalStore } from "@/store/modalStore";
import ModalManager from "@/controllers/ModalManagerController";

const logout = () => {
  localStorage.clear();
  closeModal();
  router.push("/");
};

const closeModal = () => {
  ModalManager().UpdateCurrentModalValue("logoutModal", false);
};

const isModalActive = () => {
  return ModalManager().GetCurrentModalValue()?.name === "logoutModal";
};
</script>

<template>
  <div class="container-fluid logout-modal" v-if="isModalActive()">
    <div class="modal-wrapper">
      <div class="modal-wrapper-header">
        <h4>Želite li se odjaviti iz aplikacije?</h4>
      </div>
      <div class="modal-wrapper-footer">
        <button @click="logout" type="button" class="btn btn-outline-primary">
          Odjavi se
        </button>
        <button
          @click="closeModal"
          type="button"
          class="btn btn-outline-secondary"
        >
          Odustani
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/components/modals-components/logout-modal/logout-modal.css";
</style>
