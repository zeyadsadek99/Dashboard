<template>
    <div class="card !bg-primary rounded-2xl">
    <VeeForm @submit="handleSubmit">
        <BaseInput
            name="name"
            label="Name"
            v-model="vendor.name"
        />
        <BaseInput
            name="email"
            label="Email"
            v-model="vendor.email"
        />
        <BaseInput
            name="phone"
            label="Phone"
            v-model="vendor.phone"
        />
        
        <BaseInput
            name="address"
            label="Address"
            v-model="vendor.address"
        />
        <button type="submit" class="base-btn">Submit</button>
    </VeeForm>
    </div>
    </template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
// import { useVendorsStore } from '@/stores/vendors';
import { onMounted } from 'vue';

const { t } = useI18n();
const route = useRoute();
// const vendorsStore = useVendorsStore();

const vendor = ref({});

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