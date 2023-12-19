<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CreateWorkoutComponent",
  data()
  {
    return {
      modalShow: false,
      showInputField: false
    };
  },
  methods: {
    open()
    {
      this.modalShow = true;
    },
    close()
    {
      this.modalShow = false;
    },
    openInputField()
    {
      this.showInputField = true;
    },
    closeInputField()
    {
      this.showInputField = false;
    }
  }
});
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
    <button @click="open()" type="button" class="plus-btn" data-toggle="modal" data-target="#exampleModal">
      <img src="../../assets/img/logos/add-icon.png" height="40" alt="add-button" />
    </button>
  </div>

  <div v-if="modalShow" class="modal fade show d-flex justify-content-center align-items-center" id="exampleModal"
    tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <!-- //---modal------------------------------------------------------------------------------------------ -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center">
          <h5 class="modal-title" id="exampleModalLabel">Start Your Planing</h5>
        </div>
        <div class="modal-body d-flex flex-column">
          <div class="d-flex flex-column">
            <label for="Name your Ex">Name your Exercise</label>
            <input class="m-1" type="text" placeholder="" />
          </div>
          <button @click="openInputField()" class="btn btn-primary w-40 align-self-center mt-2">
            Add
          </button>
          <!-- //--------------------------input fields------------------------------------------------------------ -->
          <div v-if="showInputField" class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center">
              <input class="m-1" type="text" />
              <div class="counter d-flex flex-row justify-content-center align-items-center bg-primary rounded">
                <div class="d-flex flex-row justify-content-center align-items-center">
                  <button class="counter-button border-0 bg-transparent ms-1 p-0">
                    +
                  </button>
                  <div class="d-flex justify-content-center align-items-center text-center m-2">
                    <p class="m-0 text-center">0</p>
                  </div>
                  <button class="counter-button border-0 bg-transparent me-1 p-0">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <input class="m-1" type="text" />
              <div class="counter d-flex flex-row justify-content-center align-items-center bg-primary rounded">
                <div class="d-flex flex-row justify-content-center align-items-center ">
                  <button class="counter-button border-0 bg-transparent ms-1 p-0">
                    +
                  </button>
                  <div class="d-flex justify-content-center align-items-center text-center m-2">
                    <p class="m-0 text-center">0</p>
                  </div>
                  <button class="counter-button border-0 bg-transparent me-1 p-0">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <input class="m-1" type="text" />
              <div class="counter d-flex flex-row justify-content-center align-items-center bg-primary rounded">
                <div class="d-flex flex-row justify-content-center align-items-center">
                  <button class="counter-button border-0 bg-transparent ms-1 p-0">
                    +
                  </button>
                  <div class="d-flex  justify-content-center align-items-center text-center m-2">
                    <p class="m-0 text-center">0</p>
                  </div>
                  <button class="counter-button border-0 bg-transparent me-1 p-0">
                    -
                  </button>
                </div>
              </div>
            </div>
            <button class="btn btn-primary w-40 align-self-center mt-2">Add Exercise</button>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center align-items-center">
          <button @click="close()" type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
