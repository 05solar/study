import { createApp } from 'vue'
import App from './App'
import { router } from './router'
import './styles/global.css'

createApp(App).use(router).mount('#app')
