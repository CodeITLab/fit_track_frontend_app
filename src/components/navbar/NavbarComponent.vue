<script lang="ts" setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#main-menu"
        aria-controls="main-menu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <div class="main-menu-toggler">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </button>
      <div class="collapse navbar-collapse" id="main-menu">
        <div class="logo ms-3">
          <img v-bind:src="require('../../assets/img/logos/logo-proto.png')" alt="" />
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link links first p-1 text-decoration-none active" to="/"
        >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links p-1 text-decoration-none" to="/dashboard"
        >Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links p-1 text-decoration-none" to="/"
        >Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/navbar.css";
</style>