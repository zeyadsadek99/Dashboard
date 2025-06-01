<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold mb-2">Rates ({{ rates?.length }})</h2>
    <div class="overflow-y-auto  max-h-[300px] custom-scrollbar pe-3 space-y-6">
      <div
        v-for="rate in rates"
        :key="rate.id"
        class="p-4 border rounded-lg flex gap-4 items-start"
      >
        <img
          :src="rate.user.image"
          alt="User Image"
          class="w-24 h-24 rounded-full object-cover"
        />

        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <h4 class="font-semibold text-lg">{{ rate.user.full_name }}</h4>

            <div class="flex space-x-1">
              <template v-for="star in 5" :key="star">
                <svg
                  v-if="star <= rate.rate"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.605 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.605 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"
                  />
                </svg>
              </template>
            </div>
          </div>

          <p class="text-gray-700 mb-2">{{ rate.comment }}</p>

          <small class="text-gray-400">
            {{ new Date(rate.created_at).toLocaleDateString() }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rates: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>

</style>
