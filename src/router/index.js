import { createWebHistory, createRouter } from "vue-router";

import { computed, ref, watch } from "vue";
import defaultLayout from "../layouts/default.vue";
import Home from "../views/Home.vue";
import Slider from "../views/Slider/index.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: defaultLayout,
      meta: {
        auth: true,
      },
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "slider",
          name: "Slider",
          component: Slider,
        },
      ],
    },
  ],
});

export default router;
