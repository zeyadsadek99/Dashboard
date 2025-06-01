<template>
  <section class="p-4 border rounded-lg w-full shadow-sm mt-6 !bg-white h !text-black">
    <h3 class="text-lg font-semibold mb-2">Orders ({{ orders?.length }})</h3>
    <div
      class="flex flex-col  h-full"
      :class="{ 'justify-center': orders?.length === 0 }"
    >
      <ul
        v-if="orders?.length > 0"
        class="divide-y divide-gray-200 max-h-64 pe-3 custom-scrollbar overflow-auto"
      >
        <li
          v-for="order in orders"
          :key="order?.id"
          class="py-2 grid grid-cols-3 w-full items-center justify-between lg:gap-20 gap-10"
        >
          <span
            class="capitalize"
            :class="{
              'text-green-500': order?.status_trans === 'completed',
              'text-yellow-500': order?.status_trans === 'pending',
              'text-red-500': order?.status_trans === 'cancelled',
              'text-gray-500': order?.status_trans === 'ended',
            }"
          >
            #{{ order?.id }} {{ order?.status_trans }}
          </span>
          <span class="">{{ order?.order_date }}</span>
          <span class="text-primary">${{ order?.total.toFixed(2) }}</span>
        </li>
      </ul>
      <p v-else class="text-center font-bold text-gray-500">No orders yet.</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  orders: {
    type: Array,
    default: () => [],
  },
});
</script>
