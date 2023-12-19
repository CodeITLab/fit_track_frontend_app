<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: { NavbarComponent },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const callback = (response: any) => {
      console.log("Handle the response", response);

      return { callback };
    };
  },
});
</script>

<template>
  <div class="home d-flex flex-column  justify-content-left">
    <NavbarComponent />
    <div class="info-card d-flex flex-column justify-content-center align-items-center text-center mt-5">
      <h1 class="text-white display-5 ">
        Get fit,<br />
        Get strong,<br />
        Get healthy!
      </h1>
      <p class="text-white">
        Whether you are trying to lose weight, gain muscle mass or want to have
        well-defined 6-pack abs – our fitness app offers full body workout plans
        with many 3D exercises for free to help you achieve your body goals.
      </p>
      <button class="btn text-white rounded-pill border border-dark-3 mb-3 btn-block col-sm-4" type="button">
        Join Us!
      </button>
      <button class="btn text-white rounded-pill border border-dark-3 btn-block col-sm-4" type="button">
        Start Now!
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/homepage.css";
</style>
