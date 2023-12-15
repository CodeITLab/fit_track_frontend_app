<template>
  <nav class="dash-nav">
    <div class="dashboard">
      <div class="container-fluid">
        <div class="d-flex flex-row">
          <div class="d-flex bg-transparent px-sm-2 px-0">
            <div
              class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
            >
              <img
                src="../assets/img/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png"
                height="35"
                class="mb-3"
              />
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <router-link
                    class="icons first p-1 text-decoration-none"
                    to="/"
                    ><img
                      src="../assets/img/logos/home-icon.png"
                      height="30"
                      alt=""
                  /></router-link>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-speedometer2"></i>
                    <span class="ms-1 d-none d-sm-inline"
                      ><img
                        src="../assets/img/logos/training.png"
                        height="30"
                        alt=""
                    /></span>
                  </a>
                  <ul
                    class="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li class="w-100">
                      <a href="#" class="nav-link px-0">
                        <span class="d-none d-sm-inline"
                          ><img
                            src="../assets/img/logos/analitics.png"
                            height="30"
                            alt=""
                        /></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-0">
                        <span class="d-none d-sm-inline"
                          ><img
                            src="../assets/img/logos/nutritions.png"
                            height="30"
                            alt=""
                        /></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-0">
                        <span class="d-none d-sm-inline"
                          ><img
                            src="../assets/img/logos/log-out.png"
                            height="30"
                            alt=""
                        /></span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div
            class="content-card bg-transparent d-flex flex-column align-items-center mt-1"
          >
            <div
              class="heading-dashboard d-flex flex-row justify-content-between w-100 mt-2"
            >
              <h5 class="text-white">Dashboard</h5>
              <h6 class="text-white">
                John Doe
                <img
                  class="ms-1"
                  src="../assets/img/logos/avatar.png"
                  height="40"
                  alt=""
                />
              </h6>
            </div>
            <div
              class="add-day d-flex flex-row justify-content-center border border-dark-3 align-items-center text-center mb-3"
            >
              <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
              <button
                type="button"
                class="plus-btn hover-none p-1"
                @click="openModal"
              >
                <img
                  src="../assets/img/logos/add-icon.png"
                  height="40px"
                  alt=""
                />
              </button>
              <DayCard
                :isOpen="isModalOpened"
                @modal-close="closeModal"
                @submit="submitHandler"
                name="first-modal"
              />
            </div>
            <div
              class="dashboard-content d-flex flex-row justify-content-center"
            >
              <div
                class="analitics opacity-25 border-2 border-dark me-1 mb-2 text-center"
              >
                Analytics
              </div>
              <div
                class="progress opacity-25 border-2 border-dark ms-3 mb-2 text-center"
              >
                Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DayCard from "../components/day-card-component/DayCard.vue";
export default defineComponent({
  name: "DashboardView",
  components: { DayCard },
  setup() {
    const isModalOpened = ref(false);

    const openModal = () => {
      isModalOpened.value = true;
    };
    const closeModal = () => {
      isModalOpened.value = false;
    };

    const submitHandler = () => {
      //here you do whatever
    };
    return { openModal, closeModal, submitHandler, isModalOpened };
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


