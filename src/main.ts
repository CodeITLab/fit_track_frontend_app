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
    clientId: '924606578425-3p2rc573dhehar22akphi1gscgctikkg.apps.googleusercontent.com'
  })
