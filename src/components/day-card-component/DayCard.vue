<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DayCard",
});
</script>
<template>
  <!-- <div class="d-flex justity-content-centar align-items-center ms-2">
    <b-button v-b-modal.modal-1><img
            src="../../assets/img/logos/add-icon.png"
            height="40"
            alt="add-button"
          /></b-button>
    <b-modal id="modal-1" title="StartExercise">
      <p class="my-4"></p>
    </b-modal>
  </div> -->
  <button
    type="button"
    class="plus-btn"
    data-toggle="modal"
    data-target="#exampleModal"
  >
    <img
      src="../../assets/img/logos/add-icon.png"
      height="40"
      alt="add-button"
    />
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
