<script lang="ts" setup>
import { StoreAccessController } from "../../controllers/store-access/StoreAccessController";
import { ModalController } from "@/controllers/modal-controllers/ModalController";
import router from "@/router";
const authFlag = localStorage.getItem('isAuth');
const CloseModal = (): void => {
    ModalController().setModalComponentModalValue(false)
    console.log(authFlag)
}
const logOut = (): void => {
    if (localStorage.getItem('isAuth')) {
        localStorage.removeItem('isAuth')
        ModalController().setChoseDashboardValue(false);
    }
    if (localStorage.getItem('isAuth') == null) {
        router.push('/');
        ModalController().setModalComponentModalValue(false)
    }
};

</script>

<template>
    <tbody>
        <tr>
            <td>
                <div class="d-flex flex-column">
                    <div v-if="authFlag === null">
                        <div class="modal-header">
                            <h5 class="modal-title">Žao nam je</h5>
                        </div>
                        <div class="dashboard-type-wrapper m-2">
                            <p>
                                Za pristup ovom dijelu aplikacije, molimo vas da se prijavite ili
                                registrirate
                            </p>
                        </div>
                    </div>

                    <div v-if="authFlag !== null">
                        <div class="modal-header">
                            <h5 class="modal-title">Odjava</h5>
                        </div>
                        <div class="dashboard-type-wrapper m-2">
                            <p>
                                Jeste li sigurni da se želite odjaviti?
                            </p>
                        </div>
                    </div>

                    <div class="m-2">
                        <button v-if="authFlag === null"
                                type="button"
                                class="btn btn-primary m-2"
                                @click="CloseModal">Close</button>
                        <div v-if="authFlag !== null">
                            <button type="button"
                                    class="btn btn-primary m-2"
                                    @click="logOut">Potvrdi</button>
                            <button type="button"
                                    class="btn btn-primary m-2"
                                    @click="CloseModal">Odustani</button>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>