<template>
  <div class="card flex flex-col max-h-screen h-screen scroll-auto py-7 overflow-auto gap-6">
    <div>
      <img src="../assets/images/logo/logo.svg" alt="" class="w-20 mx-auto" />
    </div>
    <PanelMenu :model="items" class="w-full !gap-0 md:w-64 !border-green-300">
      <template #item="{ item }">
        <router-link :to="item.to">
          <a class="flex items-center px-4 py-2 cursor-pointer group">
            <GlobalIcons :name="item?.icon" classes="w-5 h-5 !text-white" />
            <span :class="['ms-4 ', { 'font-semibold': item.items }]">{{
              item.label
            }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
          </a>
        </router-link>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Mail",
    icon: "envelope",
    badge: 5,
    items: [
      {
        to: "/",
        label: "Compose",
        icon: "envelope",
        shortcut: "⌘+N",
      },
      {
        to: "/slider",
        label: "Inbox",
        icon: "envelope",
        badge: 5,
      },
      {
        to: "/slider",
        label: "Sent",
        icon: "envelope",
        shortcut: "⌘+S",
      },
      {
        to: "/slider",
        icon: "envelope",
        shortcut: "⌘+T",
      },
    ],
  },
]);
</script>
<style>
@reference "../style.css";
.p-panelmenu-panel {
  @apply !bg-green-300   !border-none rounded-2xl;
}
.para {
  @apply text-red-500;
}
</style>
