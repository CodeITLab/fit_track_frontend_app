import { createPinia } from 'pinia'
import { createApp,watch } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia();
const app = createApp(App)

watch(pinia.state, (state)=>{
    localStorage.setItem("state", JSON.stringify(state))
},
{deep: true})
app.use(pinia)
app.use(router).mount('#app')

