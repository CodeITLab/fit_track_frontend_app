<script lang="ts" setup>

import ModalManager from "@/controllers/ModalManagerController";
import {computed, onBeforeMount} from "vue";
import {useUserStore} from "@/store/userStore";

const userData = computed(() => { return useUserStore().getUserData });

const isInboxModalActive = (): boolean => {
  return ModalManager().GetCurrentModalValue()?.name === "inboxModal";
}

</script>

<template>
  <div v-if="isInboxModalActive()" class="inbox-modal">
    <div class="inbox-modal-container">
      <div class="inbox-modal-header">
        <p class="text-white">Inbox</p>
        <button type="button" class="btn-close btn-close-white" @click="ModalManager().CloseModal('inboxModal')"
        ></button>
      </div>
      <hr/>
      <div class="inbox-modal-body">
        <div class="inbox-messages" v-for="data in userData.notificationsData">
          <div class="message">
            <div class="message-info">
              <p class="message-title text-white">{{ data.title }}</p>
              <p class="message-body text-white">{{ data.body }}</p>
            </div>
            <div class="message-date">
              <p class="text-white">02.03.2025.</p></div>
          </div>
          <hr/>
        </div>
      </div>
      <div class="inbox-modal-footer"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/inbox-modal/inbox-modal-list.css";
</style>