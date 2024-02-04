<script lang="ts" setup>
import { UserDataControler } from "../../../controllers/user-controllers/UserControler";
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";
import { reactive } from "vue";
import { login } from "@/services/GoogleLogins";

const getWorkoutData = reactive(
    StoreAccessController().userStore.getUserInfo
);
</script>
<template>
    <div
         class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
        <div class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3">
            <h5 class="text-white">Dashboard</h5>
            <h6 class="text-white">
                {{ getWorkoutData.name }}
                <img class="border border-2 border-dark rounded-circle ms-1"
                     :src=getWorkoutData.picture
                     height="45"
                     alt="" />
            </h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/dashboard-top-navbar.css";
</style>