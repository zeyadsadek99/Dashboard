<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";

const value = ref("");
</script>

<template>
  <!-- <div class="p-4 bg-gray-200">dsdssdds</div>
  <InputText type="text" v-model="value" /> -->
  
  <Suspense>
    <router-view />

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
