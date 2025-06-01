<template>
  <template v-if="loading">
    <GlobalLoader class="text-primary" />
  </template>
  <template v-else>
    <div
      class="card !bg-white !text-black rounded-2xl shadow-[0px_2px_10px_0px_var(--color-primary)]"
    >
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
                :to="`/vendors/show/${slotProps.data.id}`"
                type="button"
                class="cursor-pointer"
              >
                <GlobalIcons name="eye2" classes="text-blue-500 mt-1" />
              </router-link>
              <router-link
                :to="`/vendors/edit/${slotProps.data.id}`"
                type="button"
                class="cursor-pointer"
              >
                <GlobalIcons name="edit" classes="text-green-500" />
              </router-link>
              <!-- <Dialog
                v-model:visible="editProductDialog"
                :style="{ width: '450px' }"
                header="Edit Product"
                :modal="true"
              >
              </Dialog>
              <ConfirmPopup></ConfirmPopup> -->

              <button
                class="cursor-pointer"
                @click="deleteProduct(slotProps.data)"
              >
                <GlobalIcons name="trash" classes="mb-1 text-red-500" />
              </button>
            </div>
          </template>
        </Column>

        <!-- <template #footer>
          <GlobalButton
            name="Add Product"
            @click="openEditProductDialog"
            icon="plus"
            classes="bg-green-500 cursor-pointer"
          />
          {{ t("hello") }}
          In total there are {{ products ? products.length : 0 }} products.
        </template> -->
      </DataTable>
      <GlobalPagination
        :last_page="paginator.last_page"
        :current_page="paginator.current_page"
        @paginationClick="onPageChange"
      />
    </div>
  </template>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { t } = useI18n();
const loading = ref(false);
const start_page = ref(route.query.page || 1);
const paginator = ref({});

const onPageChange = (event) => {
  console.log(event);
  router.push({
    query: {
      page: event,
    },
  });
  start_page.value = event;
  fetchData();
};

const editProductDialog = ref(false);
const editingProduct = ref(null);

const openEditProductDialog = () => {
  editingProduct.value = null;
  editProductDialog.value = true;
};

const saveProduct = (product) => {
  const index = products.value.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    products.value[index] = product;
  }

  editProductDialog.value = false;
};

const formatCurrency = (value) => {
  if (value == null || isNaN(value)) {
    return "Invalid Value";
  }

  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
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
// , {
//       params: {
//         keyword: route.query.keyword || "",
//         direction: route.query.direction || "",
//         orderBy: route.query.orderBy || "",
//         page: route.query.page || "",
//       },
//     }
const products = ref([]);
function fetchData() {
  loading.value = true;
  axios
    .get("vendors", {
      params: {
        page: start_page.value,
      },
    })
    .then((res) => {
      products.value = res.data.data;

      paginator.value = res.data.meta;
      start_page.value = res.data.meta.current_page;

      loading.value = false;
    })
    .catch(() => (loading.value = false));
}

onMounted(() => {
  fetchData();
});

const editProduct = (product) => {
  console.log(product);
};

const deleteProduct = (product) => {
  console.log(product);
};
</script>
<style>
@reference "@/style.css";
</style>
