import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios from './http'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(VueAxios,axios)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

