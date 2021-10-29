import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'


const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

