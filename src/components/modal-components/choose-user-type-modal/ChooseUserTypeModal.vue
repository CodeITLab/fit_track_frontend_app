<script lang="ts" setup>
import { useFetch } from "@/api/useFetch";
import { IUser } from "@/models/IUser";
import router from "@/router";
import { useUserStore } from "@/store/userStore";
import { ref } from "vue";

const userID = ref<number | null>();

const saveUserData = async (user: IUser) => {

}

const updateUserType = (type: string): void => {
  localStorage.setItem("isAuth", "true");
  useUserStore().updateUserType(type);
  
  router.push('/dashboard');
}

</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button @click="updateUserType('personal')" type="button" class="btn btn-outline-primary">Personal</button>
        <button @click="updateUserType('trainer')" type="button" class="btn btn-outline-primary">Trainer</button>
      </div>
    </div>
  </div>
</template>

<style>
</style>