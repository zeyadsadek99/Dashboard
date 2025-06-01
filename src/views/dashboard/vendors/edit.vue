<template>
  <GlobalLoader v-if="loading" class="text-primary" />
  <template v-else>
    <div
      class="flex flex-col gap-4 p-5 items-start !bg-white !text-black rounded-2xl shadow-[0px_2px_10px_0px_var(--color-primary)]"
    >
      <div class="flex gap-4 w-full">
        <VendorCard v-if="vendor" :vendor="vendor" class="" />
        <OrdersCard v-if="vendor.orders" :orders="vendor.orders" class="  " />
      </div>
      <StoreCard v-if="vendor?.store" :store="vendor.store" />
      <RatesCard
        v-if="vendor?.rates?.length > 0"
        :rates="vendor.rates"
        class="w-full"
      />
    </div>
  </template>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const vendor = ref({});
const loading = ref(false);

const getData = () => {
  const id = route.params.id;
  loading.value = true;
  axios.get(`/vendors/${id}`).then((res) => {
    const result = res.data.data;
    vendor.value = result;
    loading.value = false;
  });
};
onMounted(() => {
  getData();
});
</script>
