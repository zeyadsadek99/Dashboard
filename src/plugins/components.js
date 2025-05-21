

import sideBar from "../layouts/sideBar.vue";
import navbar from "../layouts/navbar.vue";


import GlobalIcons from "../components/global/GlobalIcons.vue";

export default function globalComponents(app) {
  app.component("sideBar", sideBar);
  app.component("navbar", navbar);
  app.component("GlobalIcons", GlobalIcons);
}
