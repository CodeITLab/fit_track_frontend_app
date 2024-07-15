<script lang="ts" setup>
import { login } from "@/api/useGoogleLogin";
import ModalManager from "@/controllers/ModalManagerController";
import {LoginModalText} from "@/helpers/TextEnums";

</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-wrapper-header">
      <h5 class="modal-title" id="exampleModalLabel">{{ LoginModalText.LOGIN }}</h5>
      <button
        type="button"
        class="btn-close"
        @click="
          ModalManager().UpdateCurrentModalValue('googleLoginModal', false)
        "
      ></button>
    </div>
    <hr class="login-separator"/>
    <div class="modal-body w-100">
      <div class="row">
        <div class="col">
          <p>{{ LoginModalText.LOGIN_CREDENTIALS }}</p>
          <div class="login-form">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
          <div class="additional-login-info mt-4">
            <div>
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ LoginModalText.ZAPAMTI_ME }}
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <p>{{ LoginModalText.DRUŠTVENE_MREZE_PRIJAVA }}</p>
          <div class="social-media-login">
            <button @click="login" type="button" class="btn btn-outline-danger">
              <a href="#" class="google btn">
                <i class="fa fa-google fa-fw"></i> Login with Google
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer w-100">
      <button type="button" class="btn btn-primary">{{ LoginModalText.LOGIN }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/components/modals-components/login-modal/login.css";
</style>
