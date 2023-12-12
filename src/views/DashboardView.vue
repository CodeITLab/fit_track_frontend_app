<template>
  <div class="dashboard">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div
            class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
          >
          <img src="../assets/img/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png" height="35" class="mb-3">
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <router-link class="icons first p-1 text-decoration-none" to="/"
                  ><img src="../assets/img/logos/home-icon.png" height="30" alt=""></router-link
                >
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-speedometer2"></i>
                  <span class="ms-1 d-none d-sm-inline"><img src="../assets/img/logos/training.png" height="30" alt=""></span>
                </a>
                <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li class="w-100">
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline"><img src="../assets/img/logos/analitics.png" height="30" alt=""></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline"><img src="../assets/img/logos/nutritions.png" height="30" alt=""></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline"><img src="../assets/img/logos/log-out.png" height="30" alt=""></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div class="col py-3">Content area...</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


