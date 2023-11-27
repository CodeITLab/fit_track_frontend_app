<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GoogleLogin :callback="callback">
      <button>Login Using Google</button>
    </GoogleLogin>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { GoogleLogin} from 'vue3-google-login';

 
export default defineComponent({
  name: 'HomeView',
  components: {GoogleLogin},
  setup (){
    const callback = (response :any) => {
  console.log("Handle the response", response)
  
  return {callback}
}

}});
</script>
