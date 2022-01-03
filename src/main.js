import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";

//imported router from router/index.js
import router from "./router";

createApp(App).use(router).mount("#app");
//bootstrap
import "bootstrap/dist/js/bootstrap.js";
