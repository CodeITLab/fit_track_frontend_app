<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    const callback = (response: any) => {
      console.log("Handle the response", response);

      return { callback };
    };
  },
});
</script>

<template>
  <div class="home d-flex flex-row justify-content-evenly">
    <div
      class="info-card d-flex flex-column justify-content-center align-items-center text-center mt-5"
    >
      <h1 class="text-white display-5">
        Get fit,<br />
        Get strong,<br />
        Get healthy!
      </h1>
      <p class="text-white">
        Whether you are trying to lose weight, gain muscle mass or want to have
        well-defined 6-pack abs – our fitness app offers full body workout plans
        with many 3D exercises for free to help you achieve your body goals.
      </p>
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
    <div class="logo mt-5">
      <img
        src="../assets/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png"
        height="400"
        alt="logo"
      />
    </div>
  </div>
</template>

<style>
.info-card {
  width: 500px;
}
.btn:hover{
  color: black !important;
  background: white;
}
</style>