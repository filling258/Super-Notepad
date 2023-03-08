import { createApp } from 'vue'
import router from './router'
import pinia from './store';
import App from './App.vue'
import './assets/styles/index.css'
createApp(App).use(router).use(pinia).mount('#app')
