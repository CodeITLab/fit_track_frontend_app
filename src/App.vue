<template>
  <nav class="d-flex flex-row justify-content-between mt-2" >
    <div class="ms-3">
      <img src="./assets/img/logos/logo-proto.png" height="35" alt="">
    </div>
    <div class=" d-flex justify-content-center rounded-3 border border-dark ">
      <router-link class="links first p-1 text-decoration-none"  to="/">Home</router-link> |
      <router-link class="links p-1 text-decoration-none" to="/dashboard">Services</router-link> |
      <router-link class="links p-1 text-decoration-none" to="/">Pricing</router-link> |
      <router-link class="links p-1 text-decoration-none" to="/dashboard">Why Us</router-link> |
      <router-link class="links last p-1 text-decoration-none" to="/">Our Work</router-link> 
    </div>
    <div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    
  </nav>
  <router-view/>
</template>

<style>
body{
  background-image: url(./assets/img/backgrounds/Background3.png);
}
.links{
  color: white;
}
.links:hover{
  background: white;
  color: black;
}
.last{
border-top-right-radius: 8px;
border-bottom-right-radius:8px
}
.first{
border-top-left-radius: 10px;
border-bottom-left-radius:10px
}

</style>