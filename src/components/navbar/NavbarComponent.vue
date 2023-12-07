<script lang="ts" setup>
</script>

<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark d-flex flex-row justify-content-between mt-2">
    <div class="ms-3">
      <img
        v-bind:src="require('../../assets/img/logos/logo-proto.png')"
        height="35"
        alt=""
      />
    </div>
    <div class="d-flex justify-content-center rounded-3 border border-dark-3">
      <router-link class="links first p-1 text-decoration-none" to="/"
        >Home</router-link
      >
      |
      <router-link class="links p-1 text-decoration-none" to="/dashboard"
        >Services</router-link
      >
      |
      <router-link class="links p-1 text-decoration-none" to="/"
        >Pricing</router-link
      >
      |
      <router-link class="links p-1 text-decoration-none" to="/dashboard"
        >Why Us</router-link
      >
      |
      <router-link class="links last p-1 text-decoration-none" to="/"
        >Our Work</router-link
      >
    </div>
    <div class="me-3">
      <button
        class="navbar-toggler navbar-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/navbar.css";
</style>