<script lang="ts" setup>

import ModalManager from "@/controllers/ModalManagerController";

const isInboxModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "inboxModal";
}

</script>

<template>
  <div v-if="isInboxModalActive()" class="modal-component inbox-modal">
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Lalalal</p>
        </div>
        <div class="col">
          <button
              type="button"
              class="btn-close"
              @click="
          ModalManager().UpdateCurrentModalValue('googleLoginModal', false)
        "
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/inbox-modal/inbox-modal-list.css";
</style>