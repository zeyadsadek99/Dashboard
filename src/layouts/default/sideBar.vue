<template>
  <div
    class="card flex flex-col max-h-screen h-screen scroll-auto py-7 px-3 !bg-primary overflow-auto gap-6"
  >
    <div class="flex items-center justify-center px-4">
      <!-- <p class="text-white text-lg font-semibold mb-1">Hello, Zeyad</p> -->
      <img src="../assets/images/logo/logo.svg" alt="" class="w-20" />
    </div>
    <PanelMenu :model="items" class="w-full !gap-0 md:w-64 !border-green-300">
      <template #item="{ item, active }">
        <router-link :to="item.to" @click="active = !active">
          <a
            class="flex items-center p-2 cursor-pointer group hover:!bg-white/30 rounded-xl"
            :class="active ? '!bg-(--secondary-color)/30' : ''"
          >
            <GlobalIcons :name="item?.icon" classes="size-5 !text-white" />
            <span :class="['ms-4 ', { 'font-semibold': item.items }]">{{
              item.label
            }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
            <GlobalIcons
              v-if="item?.listIcon"
              :class="active ? 'rotate-90' : 'rotate-0'"
              :name="item?.listIcon"
              classes="size-7 !text-white transition-all duration-300 ease-in-out "
            />
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
    listIcon: "right-arrow",
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
  {
    label: "Mail2",
    icon: "envelope",
    badge: 5,
  },
  {
    label: "Mail3",
    icon: "envelope",
    badge: 5,
    listIcon: "right-arrow",
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
@reference "@/style.css";
.p-panelmenu-header-content {
  @apply bg-transparent hover:!bg-transparent;
}
.p-panelmenu-panel {
  @apply !bg-transparent    !border-none rounded-2xl;
}
.p-panelmenu-item-content {
  @apply !bg-transparent    !border-none rounded-2xl;
}
.para {
  @apply text-red-500;
}
</style>
