<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "DashboardTopNavbarComponent"
});
</script>
<template>
    <div class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
        <div class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3">
            <h5 class="text-white">Dashboard</h5>
            <h6 class="text-white">
                John Doe
                <img class="ms-1" src="../../assets/img/logos/avatar.png" height="40" alt="" />
            </h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/dashboard-top-navbar.css";
</style>