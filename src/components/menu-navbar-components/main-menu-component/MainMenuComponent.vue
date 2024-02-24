<script lang="ts" setup>
import { StoreAccessController } from '@/controllers/store-access/StoreAccessController';
import { reactive } from 'vue'

const getWorkoutData = reactive(
  StoreAccessController().userStore.getUserInfo
);
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler"
              type="button"
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
      <div class="collapse navbar-collapse w-100 justify-content-between"
           id="main-menu">
        <div v-if="StoreAccessController().modalStore.chosePrivate === false"
             class="logo ms-3">
          <img :src="require('../../../assets/img/logos/logo-proto.png')"
               alt="" />
        </div>
        <div v-if="StoreAccessController().modalStore.chosePrivate === true"
             class=" ms-3">
          <h6 class="text-white">
            <img class="border border-2 border-dark rounded-circle ms-1"
                 height="45"
                 :src=getWorkoutData.picture
                 alt="" />
            {{ getWorkoutData.name }}
          </h6>

        </div>
        <div>

          <ul class="navbar-nav me-3 mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link class="nav-link links first p-1 text-decoration-none active"
                           to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links p-1 text-decoration-none"
                           to="/dashboard">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links last p-1 text-decoration-none"
                           to="/">Contact Us</router-link>
            </li>
            <li v-if="StoreAccessController().modalStore.chosePrivate === true"
                class="nav-item ms-5">
              <router-link class="nav-link links logout p-1 text-decoration-none active"
                           to="/">Log Out</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/main-menu.css";
</style>