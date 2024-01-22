<script lang="ts" setup>
import { login } from "@/services/GoogleLogin";
import { GoogleLogin } from "vue3-google-login";
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
</script>

<template>
  <div>
    <GoogleLogin :login="login" />
  </div>
</template>


<style>
</style>