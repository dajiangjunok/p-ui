import { createApp } from 'vue'
import App from './App.vue'
import PUI from '../../src/index'
import './styles/index.scss'
// console.log(PUI);

createApp(App).use(PUI).mount('#app')