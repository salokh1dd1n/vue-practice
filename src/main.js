import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import simplePlugin from "./plugins/lesson9-most-useless/simplePlugin";

createApp(App).use(simplePlugin);

createApp(App).use(router).mount("#app");
