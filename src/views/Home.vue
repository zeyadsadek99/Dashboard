<template>
  <div class="card !bg-(--primary-color) rounded-2xl">
    <DataTable
      unstyled
      :value="products"
      class="p-4 flex flex-col gap-4"
      tableStyle="width: 100%"
    >
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Products</span>
        </div>
      </template>
      <Column field="name" header="Name" class="text-center mx-10"></Column>
      <Column header="Image" class="text-center">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-24 rounded mx-auto my-3"
          />
        </template>
      </Column>
      <Column field="price" header="Price " class="text-center">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="Category" class="text-center"></Column>
      <Column field="rating" header="Reviews" class="text-center">
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.rating"
            readonly
            class="mx-auto flex justify-center"
          />
        </template>
      </Column>
      <Column header="Status" class="text-center">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.inventoryStatus"
            :severity="getSeverity(slotProps.data)"
          />
        </template>
      </Column>
      <Column header="Actions" class="text-center">
        <template #body="slotProps">
          <div class="flex gap-2 items-center justify-center">
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
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
  
const editProductDialog = ref(false);
const editingProduct = ref(null);

const openEditProductDialog = (product) => {
  editingProduct.value = { ...product };
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

const products = ref([
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "LOWSTOCK",
    rating: 5,
  },
  {
    id: "1002",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
]);
const formatCurrency = (value) => {
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
