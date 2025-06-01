<template>
  <section
    class="p-4 border w-full border-primary rounded-lg shadow-[0px_2px_10px_0px_var(--color-primary)] mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 !bg-white !text-black"
  >
    <div class="flex justify-between gap-4 items-center">
      <div class="flex flex-col gap-4 text-center w-1/2">
        <h2 class="text-base">Store Image</h2>
        <img
          :src="store?.store_image"
          alt="Store Logo"
          class="w-full h-48 rounded-md object-cover"
        />
      </div>
      <div class="flex flex-col gap-4 text-center w-1/2">
        <h2 class="text-base">Commercial Image</h2>
        <img
          :src="store?.commercial_register_image"
          alt="Store Logo"
          class="w-full h-48 rounded-md object-cover"
        />
      </div>
    </div>
    <GlobalMap
      :location="store"
      :draggable="true"
      :autoComplete="false"
      :canDraw="false"
      :height="'250px'"
      class="w-full h-[250px]"
    />
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
defineProps({
  store: Object,
});
const { t } = useI18n();
</script>
