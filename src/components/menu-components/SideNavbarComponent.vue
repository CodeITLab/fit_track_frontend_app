<script lang="ts" setup>
import ModalManager from "@/controllers/ModalManagerController";
import { useMenuStore } from "@/store/menuStore";
import {onBeforeMount, ref} from "vue";

const isMobile = ref(false);

const checkMobileMenuValue = () => {
  if(useMenuStore().getMobileMenuValue) {
    useMenuStore().updateMobileMenuState(false);
  }
}

onBeforeMount(() => {
checkMobileMenuValue();
  screen.width < 760 ? isMobile.value = true : isMobile.value = false;
});

</script>

<template>
  <nav :class="{ 'mobile-menu': useMenuStore().getMobileMenuValue }">
    <div class="container-fluid">
      <div class="side-menu">
        <ul class="side-menu-items">
          <li class="menu-item logo">
            <img
              width="40"
              src="../../assets/img/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png"
              alt=""
            />
          </li>
          <li class="menu-item home">
            <img width="25" src="../../assets/img/logos/training.png" alt="" />
          </li>
          <li class="menu-item analytics">
            <img width="25" src="../../assets/img/logos/analitics.png" alt="" />
          </li>
          <li class="menu-item logout">
            <button
              @click="
                ModalManager().UpdateCurrentModalValue('logoutModal', true)
              "
            >
              <img width="25" src="../../assets/img/logos/log-out.png" alt="" />
            </button>
          </li>
          <li class="menu-item" v-if="useMenuStore().getMobileMenuValue">
            <button @click="useMenuStore().updateMobileMenuState(false)">
              <img width="25" src="../../assets/img/icons/left-arrow.png"
                   alt="close-modal-arrow">
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import "../../assets/css/components/menu-components/side-bar-nav.css";
</style>
