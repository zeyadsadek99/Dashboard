
<template>
    <div class="card flex gap-10 justify-between items-center ">
        <div class="flex">
            <Breadcrumb :home="home" :model="items" class="!bg-white" />
        </div>
        <div class="flex gap-6 items-center justify-center px-4">
            <Button label="New" icon="pi pi-plus"  />
            <button @click=""  class="bg-transparent border-none !text-black cursor-pointer">
                <GlobalIcons name="envelope" classes="w-5 h-5 !text-black" />
            </button>
            <button @click="" class="bg-transparent border-none !text-black cursor-pointer">
            <GlobalIcons name="notification2" classes="w-5 h-5 !text-black" />
        </button>
        <img src="../assets/images/logo/logo.svg" alt="" class="w-10 rounded-full mx-auto" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
]);
</script>
