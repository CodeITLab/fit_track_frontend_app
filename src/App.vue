<script lang="ts" setup>
  import NavbarComponent from './components/navbar/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent/>
  <router-view/>
</template>

<style>
body{
  background-image: url(./assets/img/backgrounds/Background3.png);
}
.links{
  color: white;
}
.links:hover{
  background: white;
  color: black;
}
.last{
border-top-right-radius: 8px;
border-bottom-right-radius:8px
}
.first{
border-top-left-radius: 10px;
border-bottom-left-radius:10px
}

</style>