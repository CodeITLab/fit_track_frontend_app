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
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button
          @click="updateUserType('personal')"
          type="button"
          class="btn btn-outline-primary"
        >
          Personal
        </button>
        <button
          @click="updateUserType('trainer')"
          type="button"
          class="btn btn-outline-primary"
        >
          Trainer
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
