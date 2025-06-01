import sideBar from "../layouts/default/sideBar.vue";
import authNavbar from "../layouts/default/navbar.vue";
import Navbar from "../layouts/auth/Navbar.vue";

import GlobalIcons from "../components/global/GlobalIcons.vue";
import BaseInput from "../components/inputs/BaseInput.vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";
import BasePassword from "../components/inputs/BasePassword.vue";
import BasePhone from "../components/inputs/BasePhone.vue";
import GlobalButton from "../components/global/GlobalButton.vue";
import GlobalLoader from "../components/global/GlobalLoader.vue";
import GlobalMap from "../components/global/GlobalMap.vue";
import VendorCard from "../components/cards/VendorCard.vue";
import StoreCard from "../components/cards/StoreCard.vue";
import OrdersCard from "../components/cards/OrdersCard.vue";
import RatesCard from "../components/cards/RatesCard.vue";
import GlobalPagination from "../components/global/GlobalPagination.vue";

export default function globalComponents(app) {
  app.component("sideBar", sideBar);
  app.component("authNavbar", authNavbar);
  app.component("Navbar", Navbar);

  app.component("GlobalIcons", GlobalIcons);
  app.component("BaseInput", BaseInput);
  app.component("BaseSelect", BaseSelect);
  app.component("BasePassword", BasePassword);
  app.component("BasePhone", BasePhone);
  app.component("GlobalButton", GlobalButton);
  app.component("GlobalLoader", GlobalLoader);
  app.component("GlobalMap", GlobalMap);
  app.component("VendorCard", VendorCard);
  app.component("StoreCard", StoreCard);
  app.component("OrdersCard", OrdersCard);
  app.component("RatesCard", RatesCard);
  app.component("GlobalPagination", GlobalPagination);
}
