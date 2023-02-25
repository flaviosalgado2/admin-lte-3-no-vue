import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import './assets/main.css'
// import '../node_modules/admin-lte/dist/css/adminlte.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
