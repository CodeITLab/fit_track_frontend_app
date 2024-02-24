<script lang="ts" setup>
</script>
<template>
  <nav class="dash-nav">
    <div class="dashboard">
      <div class="container-fluid">
        <div class="navbar-items d-flex flex-row justify-content-center">
          <div class="d-flex bg-transparent px-sm-2 px-0">
            <div
                 class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
              <img src="../../../assets/img/logos/fitness-logo-and-gym-icon-design-illustrationicon-free-vector.png"
                   height="35"
                   class="mb-3" />
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu">
                <li>
                  <a href="#submenu1"
                     data-bs-toggle="collapse"
                     class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-speedometer2"></i>
                    <span class="ms-1 d-none d-sm-inline"><img
                           src="../../../assets/img/logos/training.png"
                           height="30"
                           alt="" /></span>
                  </a>
                  <ul class="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu">
                    <li class="w-100">
                      <a href="#"
                         class="nav-link px-0">
                        <span class="d-none d-sm-inline"><img
                               src="../../../assets/img/logos/analitics.png"
                               height="30"
                               alt="Analytics Logo" /></span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                         class="nav-link px-0">
                        <span class="d-none d-sm-inline"><img
                               src="../../../assets/img/logos/nutritions.png"
                               height="30"
                               alt="Nutritions Logo" /></span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                         class="nav-link px-0">
                        <span class="d-none d-sm-inline"><img
                               src="../../../assets/img/logos/log-out.png"
                               height="30"
                               alt="Logout" /></span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/side-dash-nav.css";
</style>