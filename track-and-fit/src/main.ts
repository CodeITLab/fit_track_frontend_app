import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '972003616032-j51krstru7c70ccd979l88r7r41lrg01.apps.googleusercontent.com',
  prompt:true
})


app.use(router).mount('#app')
