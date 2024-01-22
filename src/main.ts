import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(router).mount('#app')
app.use(vue3GoogleLogin, {
    clientId: '972003616032-upv068l7meve96g0m83k71l85hqhaj20.apps.googleusercontent.com'
  })
