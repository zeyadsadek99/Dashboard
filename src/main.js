import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { registerAxios } from "./plugins/axios";
import { registerVeeValidate } from "./plugins/veeValidate";
import i18n from "./plugins/i18n";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import IsEqual from "fast-deep-equal";

import router from "./router";

import globalComponents from "./plugins/components";

// import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
globalComponents(app);
registerAxios();
registerVeeValidate(app);
app.use(router);
app.use(i18n);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc",
    libraries: "places",
  },
});
app.mount("#app");
