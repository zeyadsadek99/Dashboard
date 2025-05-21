<template>
    <div class="card flex max-h-screen h-screen overflow-auto">
      <PanelMenu :model="items" class="w-full md:w-64 !border-green-300">
        <template #item="{ item }">
          <router-link :to="item.to">
            <a
              class="flex items-center px-4 py-2 cursor-pointer !bg-green-300 group"
            >
              <span
                :class="[item.icon, 'text-primary group-hover:text-inherit']"
              />
              <span :class="['ml-2', { 'font-semibold': item.items }]">{{
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
      icon: "pi pi-envelope",
      badge: 5,
      items: [
        {
          to: "/",
          label: "Compose",
          icon: "pi pi-file-edit",
          shortcut: "⌘+N",
        },
        {
          to: "/slider",
          label: "Inbox",
          icon: "pi pi-inbox",
          badge: 5,
        },
        {
          to: "/slider",
          label: "Sent",
          icon: "pi pi-send",
          shortcut: "⌘+S",
        },
        {
          to: "/slider",
          icon: "pi pi-trash",
          shortcut: "⌘+T",
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      shortcut: "⌘+R",
      items: [
        {
          to: "/slider",
          label: "Sales",
          icon: "pi pi-chart-line",
          badge: 3,
        },
        {
          to: "/slider",
          label: "Products",
          icon: "pi pi-list",
          badge: 6,
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      items: [
        {
          to: "/slider",
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
        },
        {
          to: "/slider",
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
        },
      ],
    },
  ]);
  </script>
  <style>
    @reference "../../style.css";
    .p-panelmenu-panel {
    border: 1px solid green !important;
  }
  .para {
    @apply text-red-500;
  }
  </style>
  