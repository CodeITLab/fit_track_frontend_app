<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DayCardComponent",
  props: ["title"],
  data() {
    return {
      cardTitle: this.title
    }
  }
});
</script>

<template>
  <div>
    <div class="card w-25">
      <h4>{{ cardTitle }}</h4>
    </div>
  </div>
</template>

<style></style>