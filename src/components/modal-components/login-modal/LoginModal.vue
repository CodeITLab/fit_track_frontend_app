<script lang="ts" setup>

import { login } from '@/api/useGoogleLogin'

</script>

<template>
    <div class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body w-100">
                    <div class="row">
                        <div class="col">
                            <p>Enter Your Credentials</p>
                            <div class="login-form">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput"
                                        placeholder="name@example.com">
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword"
                                        placeholder="Password">
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div class="additional-login-info mt-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <p>Login With Social Media</p>
                            <div class="social-media-login">
                                <button @click="login" type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#userTypeLogin">
                                    <a href="#" class="google btn">
                                        <i class="fa fa-google fa-fw"></i> Login with Google
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer w-100">
                    <button type="button" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import "/src/assets/css/components/modals-components/login-modal/login.css";

</style>