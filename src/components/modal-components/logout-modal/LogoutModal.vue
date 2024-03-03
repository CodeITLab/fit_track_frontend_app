<script lang="ts" setup>

import router from "@/router";
import { useModalStore } from "@/store/modalStore";

const logout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('email');
    closeModal();
    router.push('/');
}

const closeModal = () => {
    useModalStore().setLogoutmodalValue(false);
}

</script>

<template>
    <div class="container-fluid logout-modal">
        <div class="modal-wrapper">
            <div class="modal-wrapper-header">
                <h4>Želite li se odjaviti iz aplikacije?</h4>
            </div>
            <div class="modal-wrapper-footer">
                <button @click="logout" type="button" class="btn btn-outline-primary">Odjavi se</button>
                <button @click="closeModal" type="button" class="btn btn-outline-secondary">Secondary</button>
            </div>
        </div>
    </div>
</template>

<style>
@import "/src/assets/css/components/modals-components/logout-modal/logout-modal.css"

</style>