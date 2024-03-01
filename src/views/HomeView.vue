<script lang="ts" setup>

import { onBeforeMount, ref } from 'vue';
import { useFetch } from '@/api/useFetch';
import { IUser } from '@/models/IUser';

const userData = ref<IUser | null>();
const userDataErrors = ref(false);
const userID = 852;

onBeforeMount(async () => {
  const { data, hasError } = await useFetch<IUser>(
    'http://127.0.0.1:8080/user/get-user-data?id=' + userID
  );

  userData.value = data.value;
  userDataErrors.value = hasError.value;
});

</script>

<template>
  <p>{{ userData?.name }}</p>
</template>

<style></style>