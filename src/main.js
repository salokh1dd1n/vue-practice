import { createApp } from "vue";
import App from "./App.vue";
import simplePlugin from "./plugins/simplePlugin";

createApp(App).use(simplePlugin);

createApp(App).mount("#app");
