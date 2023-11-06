import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


var app=createApp(App);
app.use(router);
app.mount('#app');
