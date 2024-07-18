<script lang="ts"
        setup>
import ModalManager from "@/controllers/ModalManagerController";
import {login} from "@/api/useGoogleLogin";
import {LoginModalText} from "@/helpers/TextEnums";
</script>

<template>
    <div class="inbox-modal">
      <div class="inbox-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inbox</h5>
        <button
            type="button"
            class="btn-close"
            @click="
          ModalManager().UpdateCurrentModalValue('inboxModal', false)
        "
        ></button>
      </div>

      </div>
</template>

<style lang="css" scoped>
@import "@/assets/css/components/modals-components/inbox-modal/inbox-modal-list.css";
</style>