<script lang="ts" setup>

import { getData } from '@/api/useFetch';
import { IUser } from '@/models/IUser';
import { onBeforeMount, ref } from 'vue';

import TopNavbarComponent from '@/components/menu-components/top-navbar-menu/TopNavbarComponent.vue';
import SideNavbarComponent from '@/components/menu-components/side-menu/SideNavbarComponent.vue';

const userData = ref<IUser | null>();
const userDataErrors = ref(false);
let userID: string | null = null;

if (localStorage.getItem("userID") !== null) {
  userID = localStorage.getItem('userID');
}

// prije nego se komponenta loada, hoćemo dohvatiti korisničke informacije.
onBeforeMount(async () => {

  const { data, hasError } = await getData<IUser>(
    'http://127.0.0.1:8080/user/get-user-data?id=' + userID
  );

  userData.value = data.value;
  userDataErrors.value = hasError.value;
});

</script>

<template>
  <div class="dashboard-wrapper">
    <aside>
      <SideNavbarComponent/>
    </aside>
    <main>
      <TopNavbarComponent :name="userData?.name" :picture-url="userData?.picture" />
    </main>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>