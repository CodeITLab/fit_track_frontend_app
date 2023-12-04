<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

 
export default defineComponent({
  name: 'HomeView',
  components: {},
  setup (){
    const callback = (response :any) => {
  console.log("Handle the response", response)
  
  return {callback}
}

}});
</script>
