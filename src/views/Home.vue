<template>
  <div class="card !bg-primary rounded-2xl">
    <DataTable
      unstyled
      :value="products.data"
      class="p-4 flex flex-col gap-4"
      tableStyle="width: 100%"
    >
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Products</span>
        </div>
      </template>
      <Column
        field="full_name"
        header="Name"
        class="text-center mx-10"
      ></Column>
      <Column header="Image" class="text-center">
        <template #body="slotProps">
          <img
            :src="slotProps.data.image"
            :alt="slotProps.data.image"
            class="w-24 rounded mx-auto my-3 object-cover h-14"
          />
        </template>
      </Column>
      <Column
        field="membership_number"
        header="Membership Number "
        class="text-center"
      >
        <template #body="slotProps">
          {{ slotProps.data.membership_number }}
        </template>
      </Column>
      <Column field="is_active" header="Active" class="text-center">
        <template #body="slotProps">
          <div class="flex flex-col gap-2 items-center justify-center">
            <!-- <Tag
              :value="slotProps.data.is_active ? 'Active' : 'Inactive'"
              :severity="slotProps.data.is_active ? 'success' : 'danger'"
            /> -->
            <ToggleSwitch v-model="slotProps.data.is_active" />
          </div>
        </template>
      </Column>
      <Column field="is_ban" header="Ban" class="text-center">
        <template #body="slotProps">
          <div class="flex flex-col gap-2 items-center justify-center">
            <!-- <Tag
              :value="slotProps.data.is_ban ? 'Banned' : 'Not Banned'"
              :severity="slotProps.data.is_ban ? 'danger' : 'success'"
            /> -->
            <ToggleSwitch v-model="slotProps.data.is_ban" />
          </div>
        </template>
      </Column>
      <Column field="email" header="Email" class="text-center">
        <template #body="slotProps">
          {{ slotProps.data.email || "-" }}
        </template>
      </Column>
      <Column field="phone" header="Phone" class="text-center">
        <template #body="slotProps">
          {{ slotProps.data.phone || "-" }}
        </template>
      </Column>
      <!-- <Column field="rating" header="Reviews" class="text-center">
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.rating"
            readonly
            class="mx-auto flex justify-center"
          />
        </template>
      </Column> -->
      <!-- <Column header="Status" class="text-center">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.inventoryStatus"
            :severity="getSeverity(slotProps.data)"
          />
        </template>
      </Column> -->
      <Column header="Actions" class="text-center">
        <template #body="slotProps">
          <div class="flex gap-2 items-center justify-center">
            <router-link
              :to="`/vendor/${slotProps.data.id}`"
              type="button"
              class="cursor-pointer mt-1"
            >
              <GlobalIcons name="eye2" />
            </router-link>
            <button
              type="button"
              class="cursor-pointer"
              @click="openEditProductDialog(slotProps.data)"
            >
              <GlobalIcons name="edit" />
            </button>
            <Dialog
              v-model:visible="editProductDialog"
              :style="{ width: '450px' }"
              header="Edit Product"
              :modal="true"
            >
            </Dialog>
            <ConfirmPopup></ConfirmPopup>

            <button
              class="cursor-pointer"
              @click="deleteProduct(slotProps.data)"
            >
              <GlobalIcons name="trash" classes="mb-1" />
            </button>
          </div>
        </template>
      </Column>

      <template #footer>
        <GlobalButton
          name="Add Product"
          @click="openEditProductDialog"
          icon="plus"
          classes="bg-green-500 cursor-pointer"
        />
        {{ t("hello") }}
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";

const { t } = useI18n();

const editProductDialog = ref(false);
const editingProduct = ref(null);

const openEditProductDialog = () => {
  editingProduct.value = null;
  editProductDialog.value = true;
};

const saveProduct = (product) => {
  // Update the product in the products array
  const index = products.value.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    products.value[index] = product;
  }

  // Close the dialog
  editProductDialog.value = false;
};

// const products = ref([
//   {
//     id: "1000",
//     code: "f230fh0g3",
//     name: "Bamboo Watch",
//     description: "Product Description",
//     image: "bamboo-watch.jpg",
//     price: 65,
//     category: "Accessories",
//     quantity: 24,
//     inventoryStatus: "INSTOCK",
//     rating: 5,
//   },
//   {
//     id: "1001",
//     code: "f230fh0g3",
//     name: "Bamboo Watch",
//     description: "Product Description",
//     image: "bamboo-watch.jpg",
//     price: 65,
//     category: "Accessories",
//     quantity: 24,
//     inventoryStatus: "LOWSTOCK",
//     rating: 5,
//   },
//   {
//     id: "1002",
//     code: "f230fh0g3",
//     name: "Bamboo Watch",
//     description: "Product Description",
//     image: "bamboo-watch.jpg",
//     price: 65,
//     category: "Accessories",
//     quantity: 24,
//     inventoryStatus: "INSTOCK",
//     rating: 5,
//   },
// ]);
const formatCurrency = (value) => {
  if (value == null || isNaN(value)) {
    // Handle invalid value (e.g., undefined, null, or NaN)
    return "Invalid Value"; // Or return a fallback value like '$0.00'
  }

  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};

const { data: products } = await axios.get("vendors");
onMounted(() => {
  // fetchProducts();
});

const editProduct = (product) => {
  console.log(product);
};

const deleteProduct = (product) => {
  console.log(product);
};
</script>
<style>
@reference "../style.css";
</style>
