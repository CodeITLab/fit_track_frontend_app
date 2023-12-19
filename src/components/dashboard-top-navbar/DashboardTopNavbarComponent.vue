<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "DashboardTopNavbarComponent",
});
</script>
<template>
    <div class="content-card bg-transparent d-flex flex-column justify-content-between">
        <div class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3">
            <h5 class="text-white">Dashboard</h5>
            <h6 class="text-white">
                John Doe
                <img class="ms-1" src="../assets/img/logos/avatar.png" height="40" alt="" />
            </h6>
        </div>
        <div
            class="add-day d-flex flex-row justify-content-center border border-dark-3 align-items-center align-self-center text-center mb-3">
            <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
            <DayCard />
        </div>
        <div class="dashboard-content d-flex flex-row justify-content-center"></div>
    </div>
</template>