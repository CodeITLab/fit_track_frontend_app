<script lang="ts" setup>
import LoginModal from "@/components/modal-components/login-modal/LoginModal.vue";
import ChooseUserTypeModal from "@/components/modal-components/choose-user-type-modal/ChooseUserTypeModal.vue";
import { HomePageLoginText } from "@/helpers/TextEnums";
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
    <div class="row">
      <div class="col h-100 main-content">
        <div class="main-content-title">
          <h1 class="text-white">
            Fitness And Tracking
          </h1>
        </div>
        <div class="main-content-description">
          <p class="text-white">
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
            {{ HomePageLoginText.LOGIN }}
          </button>
          <button
            class="btn text-white rounded-pill border border-dark-3 mt-3"
            type="button"
          >
            {{ HomePageLoginText.SIGN_UP }}
          </button>
        </div>
      </div>
      <div class="col h-100 d-flex align-items-center justify-content-center">
        <img width="420" src="../assets/img/backgrounds/fitness-homepage.jpg"
             alt="">
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
