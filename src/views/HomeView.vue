<script lang="ts" setup>
import { defineComponent } from "vue";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { StoreAccessController } from "../controllers/store-access/StoreAccessController";
import LoginFormModal from "../components/login-component/LoginFormModal.vue";

import MainMenuComponent from "../components/menu-navbar-components/main-menu-component/MainMenuComponent.vue";

const setModalValue = (modalValue: boolean) => {
  StoreAccessController().modalStore.openCloseChoseLoginForm(modalValue);
};
let proba = StoreAccessController().modalStore.choseLoginForm;
</script>

<template>
  <div class="home d-flex flex-column">
    <MainMenuComponent />
    <div
      class="info-card d-flex flex-column justify-content-center align-self-center text-center mt-5"
    >
      <h1 class="text-white display-5">
        Get fit,<br />
        Get strong,<br />
        Get healthy!
      </h1>
      <p class="text-white ms-2 me-2">
        Whether you are trying to lose weight, gain muscle mass or want to have
        well-defined 6-pack abs – our fitness app offers full body workout plans
        with many 3D exercises for free to help you achieve your body goals.
      </p>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <button
          class="btn text-white rounded-pill border border-dark-3 mb-3 btn-block col-sm-4"
          type="button"
          @click="setModalValue(true)"
        >
          Log in
        </button>
        <LoginFormModal v-if="proba === true" />
        <button
          class="btn text-white rounded-pill border border-dark-3 btn-block col-sm-4"
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
