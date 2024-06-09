<script lang="ts" setup>
import { getData } from '@/api/useFetch';
import { IUser } from '@/models/IUser';
import { onBeforeMount, ref } from 'vue';

const userData = ref<IUser | null>();
const userDataErrors = ref(false);

onBeforeMount(async () => {

  let currentUser = localStorage.getItem('email');

  const { data, hasError } = await getData<IUser>(
    'http://127.0.0.1:8080/user/get-user-by-email?email=' + currentUser
  );

  userData.value = data.value;
  userDataErrors.value = hasError.value;
});

</script>
<template>
  <div class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
    <div class="heading-dashboard">
      <h5 class="text-white">Dashboard</h5>
      <div class="user-info">
        <h5 class="text-white">
          {{ userData?.name }}
        </h5>
        <img class="border border-2 border-dark rounded-circle ms-2" :src="userData?.picture" height="45" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/dashboard-top-navbar.css";
</style>