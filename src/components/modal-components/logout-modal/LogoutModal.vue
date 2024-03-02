<script lang="ts" setup>

import router from "@/router";

const logout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('email');
    router.push('/');
}

</script>

<template>
    <div class="modal-wrapper">
        <div class="modal-wrapper-header">
            <h4>Želite uistinu odjaviti se iz aplikacije?</h4>
        </div>
        <div class="modal-wrapper-footer">
            <button @click="logout" type="button" class="btn btn-outline-primary">Odjavi se</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </div>
    </div>
</template>

<style></style>