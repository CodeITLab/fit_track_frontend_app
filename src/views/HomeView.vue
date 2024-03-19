<script lang="ts" setup>
import LoginModal from "@/components/modal-components/login-modal/LoginModal.vue";
import ChooseUserTypeModal from "@/components/modal-components/choose-user-type-modal/ChooseUserTypeModal.vue";
import { useModalStore } from "@/store/modalStore";
import ModalManager from "@/controllers/ModalManagerController";

const isLoginModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "googleLoginModal";
};

const isUserTypeModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "userTypeModal";
};
</script>

<template>
  <div class="container-fluid home-view">
    <div class="row h-100">
      <div class="col h-100 main-content">
        <div class="main-content-title">
          <h1 class="text-white display-5">
            Get fit,<br />
            Get strong,<br />
            Get healthy!
          </h1>
        </div>
        <div class="main-content-description">
          <p class="text-white ms-2 me-2">
            Whether you are trying to lose weight, gain muscle mass or want to
            have well-defined 6-pack abs – our fitness app offers full body
            workout plans with many 3D exercises for free to help you achieve
            your body goals.
          </p>
        </div>
        <div class="main-content-footer">
          <button
            class="btn text-white rounded-pill border border-dark-3"
            type="button"
            @click="
              ModalManager().UpdateCurrentModalValue('googleLoginModal', true)
            "
          >
            Log in
          </button>
          <button
            class="btn text-white rounded-pill border border-dark-3 mt-3"
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
      <div class="login-modal" v-if="isLoginModalActive()">
        <LoginModal />
      </div>
      <div class="dashboard-type" v-if="isUserTypeModalActive()">
        <ChooseUserTypeModal />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
