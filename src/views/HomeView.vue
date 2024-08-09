<script lang="ts" setup>
import LoginModal from "@/components/modal-components/login-modal/LoginModal.vue";
import { HomePageLoginText } from "@/helpers/TextEnums";
import ModalManager from "@/controllers/ModalManagerController";
import ButtonComponent from "@/components/button-components/ButtonComponent.vue";

const isLoginModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "googleLoginModal";
};
</script>

<template>
  <div class="container-fluid home-view">
    <div class="row">
      <div class="col">
        <div class="main-content-title">
          <h1 class="text-white">
            Fitness <span class="highlighted">And</span> Tracking
          </h1>
        </div>
        <hr />
        <div class="main-content-description">
          <p class="text-white">
            Mi vjerujemo da svatko ima potencijal za transformaciju.
          </p>
          <p class="text-white">
            Bez obzira jeste li tek početnik ili iskusni sportaš, naša
            aplikacija je dizajnirana kako bi vam pomogla da postignete svoje
            ciljeve i osjetite snagu unutar sebe.
          </p>
          <p class="text-white">
            Počnite danas i osjetite razliku! <br />
            Zajedno, pretvaramo izazove u pobjede.
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

          <ButtonComponent
            backgroundColor="backgroundColor"
            borderColor="borderColor"
            btnText="REGISTRACIJA"
          >
          </ButtonComponent>
        </div>
      </div>
      <div class="col side-image">
        <img
          width="460"
          src="../assets/img/backgrounds/fitness-homepage.jpg"
          alt="Homepage Fitness Image"
        />
      </div>
      <div class="login-modal" v-if="isLoginModalActive()">
        <LoginModal />
      </div>
    </div>
    <hr />
    <div class="row p-4">
      <div class="col side-image">
        <img
          width="720"
          src="../assets/img/backgrounds/app-dashboard.jpg"
          alt="App Dashboard"
        />
      </div>
      <div class="col">
        <div class="main-content-title">
          <h3 class="text-white">
            Što je Fitness <span class="highlighted">And</span> Tracking?
          </h3>
        </div>
        <hr />
        <div class="main-content-description">
          <p class="text-white">
            Fitness platforma lagana za korištenje, bez obzira jeste li potpuni
            početnik ili iskusni vježbač.
          </p>
          <br />
          <p class="text-white">
            Kreirajte vlastite rutine, unosite vježbe, pratite analitiku
            napretka i učite o različitim vrstama vježbi i njihovoj pravilnoj
            izvedbi.
          </p>
          <br />
          <p class="text-white">
            Aplikacija je namijenjena i za trenere koji mogu kreirati grupne
            treninge, pratiti napredak svojih klijenata i upravljati njihovim
            programima treninga na jednom mjestu.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
