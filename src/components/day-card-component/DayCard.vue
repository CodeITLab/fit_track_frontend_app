<script lang="ts">
import { BButton, BModal, VBModal } from "bootstrap-vue";
import { defineComponent,} from "vue";
export default defineComponent({
  name: "DayCard",
  // props: {
  //   visible: Boolean,
  //   variant:String,
  // },
  data() {
        return {
            modalShow: false
        }
    },
    methods: {
        open(){
             this.modalShow = true;
        },
        close(){
             this.modalShow = false;
        }
    }
  // data(){
  //   return{
  //      OpenClose: this.visible
  //   }
  // },
  // methods:{
  //       OpenCloseFun(){
  //          this.OpenClose=false;
  //       },
  // },
  // watch: { 
  //     visible: function(newVal, oldVal) { // watch it
  //       this.OpenClose =newVal;
  //       console.log('new' +newVal+ '==' +oldVal)
  //     }
  //   }
});
</script>

<template>
  <button
  @click="open()"
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

  <div v-if="modalShow"
    class="modal fade show d-flex justify-content-center align-items-center"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center">
          <h5 class="modal-title" id="exampleModalLabel">Start Your Planing</h5>
        </div>
        <div class="modal-body d-flex flex-column">
          <form action="">
            <input class="m-1" type="text" placeholder="">
            <input class="m-1" type="text" placeholder="">
            <input class="m-1" type="text" placeholder="">
            <input class="m-1" type="text" placeholder="">
          </form>
        </div>
        <div class="modal-footer">
          <button @click="close()" type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
