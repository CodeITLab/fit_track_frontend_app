<script lang="ts">
import { defineComponent } from "vue";

import MainMenuComponent from "@/components/main-menu-component/MainMenuComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainMenuComponent,
  },
});
</script>

<template>
  <div class="home d-flex flex-column">
    <MainMenuComponent />
    <div
      class="info-card d-flex flex-column justify-content-center align-self-center text-center mt-5"
    >
      <h1 class="text-white display-5">
        Get fit,<br />
        Get strong,<br />
        Get healthy!
      </h1>
      <p class="text-white ms-2 me-2">
        Whether you are trying to lose weight, gain muscle mass or want to have
        well-defined 6-pack abs – our fitness app offers full body workout plans
        with many 3D exercises for free to help you achieve your body goals.
      </p>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <button
          class="btn text-white rounded-pill border border-dark-3 mb-3 btn-block col-sm-4"
          type="button"
        >
          Join Us!
        </button>
        <button
          class="btn text-white rounded-pill border border-dark-3 btn-block col-sm-4"
          type="button"
        >
          Start Now!
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
