<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
    default: "icons",
  },

  classes: {
    type: String,
    required: false,
  },
});

const icon = defineAsyncComponent(() =>
  import(`@/assets/images/${props.path}/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" class="size-5" :class="classes" />
</template>
