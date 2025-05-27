import { createWebHistory, createRouter } from "vue-router";

import { computed, ref, watch } from "vue";
import defaultLayout from "../layouts/default/default.vue";
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
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("@/views/NotFound.vue"),
        },
        {
          path: "/403",
          name: "not-authorized",
          component: () => import("@/views/403.vue"),
        },
        {
          path: "/402",
          name: "too-many-requests",
          component: () => import("@/views/402.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/auth/Auth.vue"),
      children: [
        {
          path: "login",
          name: "login",
          meta: {
            guest: true,
          },
          component: () => import("@/views/auth/Login.vue"),
        },
        // {
        //   path: "forget-password",
        //   name: "forget-password",
        //   meta: {
        //     guest: true,
        //   },
        //   component: () => import("@/views/auth/ForgetPassword.vue"),
        // },
        // {
        //   path: "reset-password",
        //   name: "changePassword",
        //   meta: {
        //     guest: true,
        //   },
        //   component: () => import("@/views/auth/ResetPassword.vue"),
        // },

        // {
        //   path: "verify",
        //   name: "verify",
        //   meta: {
        //     guest: true,
        //   },
        //   component: () => import("@/views/auth/Verify.vue"),
        // },
      ],
    },
  ],
});

export default router;
