<template>
  <nav class="w-100">
    <div class="flex items-center justify-between py-9 px-9 gap-1">
      <router-link to="/">
        <img :src="logo" class="w-40 h-20" />
      </router-link>

      <button
        type="button"
        class="bg-white flex items-center gap-2 text-black w-10 h-10 rounded-full justify-center"
        @click=""
      >
        {{ $t(`locale.${$i18n.locale}`) }}
      </button>
    </div>
  </nav>
</template>

<script setup>
//   import Cookies from "js-cookie";
import { useI18n } from "vue-i18n";
import logo from "@/assets/images/logo/logo.svg";
const i18n = useI18n();

//   function changeLocale() {
//     if (i18n.locale.value === "ar") {
//       Cookies.set("SAAS_DASHBOARD_LANG", "en");
//     } else {
//       Cookies.set("SAAS_DASHBOARD_LANG", "ar");
//     }
//     window.location.reload();
//   }
</script>

<style lang="scss">
nav {
  z-index: 2;
  img {
    user-select: none;
  }
  .toggle-langs {
    background-color: #f4f4f8;
    gap: 3.5px;
  }
}
</style>
