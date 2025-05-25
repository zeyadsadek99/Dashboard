<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  classes: {
    type: String,
    required: false,
  },
});

const icon = defineAsyncComponent(() =>
  import(`@/assets/images/icons/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" class="size-5" :class="classes" />
</template>
