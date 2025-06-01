<template>
  <section
    class="border border-primary rounded-lg relative !bg-white flex items-center justify-between !text-black shadow-sm gap-3 py-5 px-10"
  >
    <div class="flex flex-col items-center gap-4 relative">
      <div class="relative">
        <div
          class="size-5 rounded-full absolute bottom-1 end-2"
          :class="vendor.is_ban ? 'bg-red-600' : 'bg-green-600'"
        ></div>
        <img
          :src="vendor.image"
          alt="Vendor Image"
          class="w-24 h-24 rounded-full border object-cover border-primary/60 mx-auto"
        />
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <GlobalIcons name="user3" classes="!size-6" />
          <h2 class="text-2xl font-bold mb-1 whitespace-nowrap">{{ vendor.full_name }}</h2>
        </div>
        <div class="flex items-center gap-2">
          <GlobalIcons name="envelope" classes="!size-6" />
          <p v-if="vendor.email" class="text-sm mb-1 whitespace-nowrap">{{ vendor.email }}</p>
        </div>
        <div class="flex items-center gap-2">
          <GlobalIcons name="phone" classes="!size-6" />
          <p v-if="vendor.phone" class="text-sm mt-1 whitespace-nowrap">
            {{ vendor.phone_code }} {{ vendor.phone }}
          </p>
        </div>
        <div class="flex items-center gap-1 mt-2 justify-center">
          <GlobalIcons
            name="circle"
            classes="!size-3"
            :class="vendor.is_active ? 'text-green-600' : 'text-red-600'"
          />
          <p class="text-sm">
            {{ vendor.is_active ? "Active" : "Inactive" }}
          </p>
        </div>
        <button
          @click="editVendor(vendor.id)"
          class="flex items-center gap-2 mt-3 cursor-pointer justify-center text-white bg-primary hover:!bg-white hover:text-primary border border-primary rounded-full p-2"
        >
          <GlobalIcons name="edit2" classes="!size-6" />
          <p class="text-sm ">Edit</p>
        </button>
      </div>
    </div>
    <div class="absolute top-0 end-0">
      <GlobalIcons name="bell" classes="size-5" />
      <span
        v-if="vendor.unread_notifications"
        class="text-[10px] absolute -top-2 start-3.5 rounded-full bg-primary text-white px-1"
        >{{ vendor.unread_notifications }}</span
      >
    </div>
    <!-- <div class=" flex gap-2 items-center justify-center">
      <GlobalIcons name="edit2" classes="size-5 cursor-pointer" />
    </div> -->
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
defineProps({
  vendor: Object,
});
const emit = defineEmits(["editVendor"]);
const router = useRouter();
const editVendor = (id) => {
  emit("editVendor", id);
  router.push(`/vendors/show/${id}`);
};
</script>
