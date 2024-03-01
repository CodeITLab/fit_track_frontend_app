<script lang="ts" setup>
import router from "@/router";
import { useUserStore } from "@/store/userStore";

const updateUserType = (type: string): void => {
  localStorage.setItem("isAuth", "true");
  router.push('/dashboard');
}

</script>

<template>

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Choose your user type</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Trainer</button>
        <button type="button" class="btn btn-primary">Personal</button>
      </div>
    </div>
  </div>
</div>

</template>

<style>
@import "../../../assets/css/components/dashboard-type-modal.css";
</style>