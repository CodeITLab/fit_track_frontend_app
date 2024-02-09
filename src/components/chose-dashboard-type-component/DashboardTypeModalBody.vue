<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "../../controllers/modal-controllers/ModalController";

const setDashboardTypeValue = () => {
  ModalController().setChoseDashboardValue(false);
  ModalController().setChosePrivateValue(true);
};

// zasebnu metodu koja će na klik spremati tip korisnika
// metoda bi koristila updateUserType() iz user store-a

const updateUserType = (type: string): void => {
  // prosljeđenu vrijednost spremiti u userType preko metode updateUserType
  // onda spremiti cijelu user objekt u local storage
}

</script>

<template>
  <tbody>
    <tr>
      <td>
        <div class="d-flex flex-column">
          <div class="dashboard-type-wrapper m-2">
            <label
              class="dashboard-type-label font-weight-normal"
              for="dashboard type"
              >Choose your dashboard type</label
            >
          </div>

          <div class="m-2">
            <button
              type="button"
              class="btn btn-primary m-2"
              @click="updateUserType('trainer')"
            >
              <router-link
                class="nav-link links p-1 text-decoration-none"
                to="/dashboard"
                >Trainer</router-link
              >
            </button>
            Or
            <button
              type="button"
              class="btn btn-primary m-2"
              @click="setDashboardTypeValue"
            >
              <router-link
                class="nav-link links p-1 text-decoration-none"
                to="/dashboard"
                >Personal</router-link
              >
            </button>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>



<style>
@import "../../assets/css/components/dashboard-type-modal.css";
</style>