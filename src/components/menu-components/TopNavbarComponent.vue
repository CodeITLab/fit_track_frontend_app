<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IUser } from '@/models/IUser';
import { useUserStore } from '@/store/userStore';
import { onBeforeMount, ref } from 'vue';

const userData = ref<IUser | null>();
const userDataErrors = ref(false);

onBeforeMount(async () => {

  localStorage.setItem("mail", JSON.stringify(useUserStore().getUserData.email));
  let currentUser = JSON.parse(localStorage.getItem('mail') || '{}');

  const { data, hasError } = await getData<IUser>(
    'http://127.0.0.1:8080/user/get-user-by-email?email=' + currentUser
  );

  userData.value = data.value;
  userDataErrors.value = hasError.value;
});

</script>
<template>
  <div class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
    <div class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3">
      <h5 class="text-white">Dashboard</h5>
      <h6 class="text-white">
        {{ userData?.name }}
        <img class="border border-2 border-dark rounded-circle ms-1" :src="userData?.picture" height="45" alt="" />
      </h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/dashboard-top-navbar.css";
</style>