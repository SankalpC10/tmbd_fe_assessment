import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/styles.css';
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>

const app = createApp(App)

app.config.globalProperties.$http = axios

app.mount('#app')
