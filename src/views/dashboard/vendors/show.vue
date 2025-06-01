<template>
  <template v-if="loading">
    <GlobalLoader class="text-primary" />
  </template>
  <template v-else>
    <div
      class="card py-6 px-5 !bg-white text-black rounded-2xl shadow-[0px_2px_10px_0px_var(--color-primary)]"
    >
      <h2 class="title">jadsdsajidasj
        <p>{{ vendor?.full_name }}</p>
      </h2>

      <VeeForm
        @submit="handleSubmit"
        :initialValues="vendor"
        v-slot="{ values }"
        class="space-y-4"
      >
        <pre>{{ vendor?.store?.lat }}</pre>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
          <BaseInput
            id="full_name"
            name="full_name"
            label="Name"
            :placeholder="t('LABELS.Enter', { name: t('LABELS.name') })"
          />
          <BaseInput
            id="email"
            name="email"
            label="Email"
            :placeholder="t('LABELS.Enter', { name: t('LABELS.email') })"
          />

          <BaseInput
            id="address"
            name="address"
            label="Address"
            :placeholder="t('LABELS.Enter', { name: t('LABELS.address') })"
          />

          <GlobalMap
            v-model:location="vendor.store"
            :draggable="true"
            :autoComplete="true"
            :canDraw="true"
            :label="t('LABELS.Select location from map')"
          />

          <div class="col-span-3">
            <BaseFile
              id="image"
              name="image"
              modalName="users"
              modalType="image"
              v-model:itemValue="vendor.image"
              v-model:image="vendor.path"
              multiple
              :placeholder="t('LABELS.Enter', { name: t('LABELS.image') })"
            />
          </div>
          <BaseInput
            id="phone"
            name="phone"
            label="Phone"
            :placeholder="t('LABELS.Enter', { name: t('LABELS.phone') })"
          />
        </div>
        <GlobalButton name="save" type="submit" classes="base-btn" />
      </VeeForm>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
// import { useVendorsStore } from '@/stores/vendors';
import { onMounted } from "vue";
import axios from "axios";
const loading = ref(false);
const { t } = useI18n();
const route = useRoute();
// const vendorsStore = useVendorsStore();

const vendor = ref({
  location: {
    lat: 0,
    lng: 0,
  },
  // locationAddress: "",
  // area: [],
});
const getData = () => {
  const id = route.params.id;
  loading.value = true;
  axios.get(`/vendors/${id}`).then((res) => {
    const result = res.data.data;
    vendor.value = result;
    // vendor.value.location.lat = result?.store?.lat;
    // vendor.value.location.lng = result?.store?.lng;
    // console.log(vendor.value);
    // console.log("sadffdsfa", res.data.data);
    // vendor.value.location.lat = +vendor.value.location.lat;
    // vendor.value.location.lng = +vendor.value.location.lng;
    loading.value = false;
  });
  // vendorsStore.getVendor(id).then((res) => {
  //     vendor.value = res.data;
  // });
};
onMounted(() => {
  getData();
});

// onMounted(() => {
//     const id = route.params.id;
//     vendorsStore.getVendor(id).then((res) => {
//         vendor.value = res.data;
//     });
// });

// const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     return;
//     vendorsStore.updateVendor(vendor.value.id, values).then(() => {
//         resetForm();
//         alert('Vendor updated successfully');
//     });
// };
</script>
