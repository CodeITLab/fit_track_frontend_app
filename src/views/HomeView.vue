<script lang="ts" setup>
import LoginModal from "@/components/modal-components/login-modal/LoginModal.vue";
import ChooseUserTypeModal from "@/components/modal-components/choose-user-type-modal/ChooseUserTypeModal.vue";
import { HomePageLoginText } from "@/helpers/TextEnums";
import ModalManager from "@/controllers/ModalManagerController";

const isLoginModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "googleLoginModal";
};

</script>

<template>
  <div class="container-fluid home-view">
    <div class="row">
      <div class="col main-content">
        <div class="main-content-title">
          <h1 class="text-white">
            Fitness <span class="highlighted">And</span> Tracking
          </h1>
        </div>
        <div class="main-content-description">
          <p class="text-white">
            Mi vjerujemo da svatko ima potencijal za transformaciju.
          </p>
          <p class="text-white">
            Bez obzira jeste li tek početnik ili iskusni sportaš,
            naša aplikacija je dizajnirana kako bi vam pomogla da postignete svoje ciljeve i osjetite snagu unutar sebe.
          </p>
          <p class="text-white">
            Počnite danas i osjetite razliku! Zajedno, pretvaramo izazove u pobjede.
          </p>
        </div>
        <div class="main-content-footer mt-4">
          <button
            class="btn text-white border border-dark-3"
            type="button"
            @click="
              ModalManager().UpdateCurrentModalValue('googleLoginModal', true)
            "
          >
            {{ HomePageLoginText.LOGIN }}
          </button>
          <button
            class="btn text-white border border-dark-3 mt-3"
            type="button"
          >
            {{ HomePageLoginText.SIGN_UP }}
          </button>
        </div>
      </div>
      <div class="col side-image">
        <img width="460" src="../assets/img/backgrounds/fitness-homepage.jpg"
             alt="">
      </div>
      <div class="login-modal" v-if="isLoginModalActive()">
        <LoginModal />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
