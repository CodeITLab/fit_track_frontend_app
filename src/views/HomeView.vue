<script lang="ts" setup>
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import { StoreAccessController } from "../controllers/store-access/StoreAccessController";

import GoogleLoginsModal from "../components/login-component/GoogleLoginsModal.vue";
import LoginFormModal from "../components/login-component/LoginFormModal.vue";
import DashboardTypeModal from "../components/chose-dashboard-type-component/DashboardTypeModal.vue";
import MainMenuComponent from "../components/menu-navbar-components/main-menu-component/MainMenuComponent.vue";

const setValueToTrue = (): void => {
  ModalController().setLoginFormModalValue(true);
};

// ovdje možemo imati metodu koja vraća boolean
// ako je localStorage.getItem('user') === null, neka vrati false, else vraća true.

</script>

<template>
  <div class="home d-flex flex-column"
       v-bind:class="{ homelogedin: StoreAccessController().modalStore.chosePrivate }">
    <MainMenuComponent />
    <div
         class="info-card d-flex flex-column justify-content-center align-self-center text-center mt-5">
      <div>
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
        <div v-if="StoreAccessController().modalStore.chosePrivate === false"
             class="d-flex flex-column justify-content-center align-items-center">
          <div v-if="StoreAccessController().modalStore.choseTrainer === true">
            <GoogleLoginsModal />
          </div>
          <button class="btn text-white rounded-pill border border-dark-3 mb-3 btn-block col-sm-4"
                  type="button"
                  @click="setValueToTrue()">
            Log in
          </button>
          <div v-if="StoreAccessController().modalStore.choseLoginForm === true">
            <LoginFormModal />
          </div>
          <button class="btn text-white rounded-pill border border-dark-3 btn-block col-sm-4"
                  type="button">
            Sign up
          </button>
        </div>
      </div>
      <div v-if="StoreAccessController().modalStore.chosePrivate === true">
        <button type="button"
                class="btn text-white rounded-pill border border-dark-3 mb-3 btn-block"><router-link
                       class="nav-link links p-1 text-decoration-none"
                       to="/dashboard">Back To Dashboard</router-link></button>
      </div>
      <div v-if="StoreAccessController().modalStore.choseDashboardType === true">
        <DashboardTypeModal />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
