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
          <div class="content-card bg-transparent d-flex flex-column">
            <div class="d-flex flex-row justify-content-center">
              <div class="day-card d-flex m-2 justify-content-center">Mon</div>
              <div class="day-card d-flex m-2 justify-content-center">Tue</div>
              <div class="day-card d-flex m-2 justify-content-center">Wed</div>
              <div class="day-card d-flex m-2 justify-content-center">Thu</div>
              <div class="day-card d-flex m-2 justify-content-center">Fri</div>
              <div class="day-card d-flex m-2 justify-content-center">Sat</div>
              <div class="day-card d-flex m-2 justify-content-center">Sun</div>
            </div>
            <div
              class="dashboard-content d-flex flex-row justify-content-center"
            >
              <div class="analitics opacity-25 border-2 border-dark me-1 mb-2 text-center">Analitics</div>
              <div class="analitics opacity-25 border-2 border-dark ms-1 mb-2 text-center">Progress</div>
            </div>
            <!-- <div
              class="tables d-flex justify-content-center align-items-center"
            >
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Exercises</th>
                    <th scope="col">Repetitions</th>
                    <th scope="col">Remove Exercise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Push-ups</td>
                    <td>4</td>
                    <td>
                      <button
                        type="button"
                        class="text-black rounded-pill border border-dark-3 mb-3 btn-block"
                      >
                        Delite
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Planks</td>
                    <td>5</td>
                    <td>
                      <button
                        type="button"
                        class="text-black rounded-pill border border-dark-3 mb-3 btn-block"
                      >
                        Delite
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Pull-ups</td>
                    <td>6</td>
                    <td>
                      <button
                        type="button"
                        class="text-black rounded-pill border border-dark-3 mb-3 btn-block"
                      >
                        Delite
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "../assets/css/views/dashboard.css";
</style>


