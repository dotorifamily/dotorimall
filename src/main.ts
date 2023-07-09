import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import axios from 'axios';
import "./assets/scss/common.scss";
import 'reset-css';

const pinia = createPinia();
const app = createApp(App)
// [axios / http 통신]
app.config.globalProperties.$axios = axios;

app.use(pinia);
app.mount('#app');
