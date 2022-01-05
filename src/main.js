import "bootstrap/dist/css/bootstrap.min.css";



import { createApp } from "vue";
// import { inject } from "vue";
// const toast = inject("$toast");
// toast("Simple!");
import App from "./App.vue";

//imported router from router/index.js
import router from "./router";
import DKToast from 'vue-dk-toast';

createApp(App).use(router, DKToast).mount("#app");
//bootstrap
import "bootstrap/dist/js/bootstrap.js";

