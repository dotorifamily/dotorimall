import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import axios from 'axios';
import "./assets/scss/common.scss";
import 'reset-css';
import { library }  from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const pinia = createPinia();
const app = createApp(App)
// [axios / http 통신]
app.config.globalProperties.$axios = axios;
library.add(fas)
library.add(far)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.mount('#app');
