<template>
  <div class="card flex gap-10 justify-between items-center">
    <div>
      <p class="text-2xl font-semibold text-black">Welcome, Zeyad</p>
    </div>
    <!-- <div class="flex">
            <Breadcrumb :home="home" :model="items" class="!bg-white" />
        </div> -->
    <div class="flex gap-4 items-center justify-center px-4">
      <!-- <Button label="New" icon="pi pi-plus" /> -->
      <router-link
        to="auth/login"
        class="bg-primary hover:!bg-primary/60 rounded-full border-none text-white hover:!text-black/60 transition-all duration-300 ease-in-out p-2 cursor-pointer"
      >
        <GlobalIcons name="sign-out" classes="size-6" />
      </router-link>
      <button
        @click=""
        class="bg-primary hover:!bg-primary/60 rounded-full border-none text-white hover:!text-black/60 transition-all duration-300 ease-in-out p-2 cursor-pointer"
      >
        <GlobalIcons name="lang" classes="size-6 " />
      </button>
      <button
        @click=""
        class="bg-primary hover:!bg-primary/60 rounded-full border-none text-white hover:!text-black/60 transition-all duration-300 ease-in-out p-2 cursor-pointer"
      >
        <GlobalIcons name="messages" classes="size-6 " />
      </button>
      <button
        @click=""
        class="bg-primary hover:!bg-primary/60 rounded-full border-none text-white hover:!text-black/60 transition-all duration-300 ease-in-out p-2 cursor-pointer"
      >
        <GlobalIcons name="bell" classes="size-6 " />
      </button>
      <img
        src="@/assets/images/static/food.png"
        alt=""
        class="size-10 rounded-full mx-auto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const home = ref({
  icon: "pi pi-home",
});
const items = ref([
  { label: "Electronics" },
  { label: "Computer" },
  { label: "Accessories" },
  { label: "Keyboard" },
  { label: "Wireless" },
]);
</script>
