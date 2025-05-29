<template>
  <VeeField :type="type" :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper"
      :class="[
        {
          error: !meta.valid && meta.touched,
          prepend: prepend,
        },
        classes,
      ]"
    >
      <label
        :for="id"
        v-if="label"
        :class="labelClass"
        class="label !flex gap-2 ps-1 capitalize items-center text-primary/90"
      >
        <svg-icon v-if="labelIcon" :name="labelIcon" classes="text-xl" />

        {{ label }}
        <span v-if="optional" class="text-placeholder"
          >({{ $t("LABELS.optional") }})</span
        >
      </label>
      <div class="relative" :class="icon ? 'with_icon' : ''">
        <!-- <img class="icon" v-if="icon" :src="`/icons/${icon}`" alt="icon" /> -->
        <svg-icon v-if="icon" :name="icon" classes="text-xl icon text-sub" />

        <textarea
          v-if="type == 'textarea'"
          :id="id"
          v-bind="field"
          :placeholder="placeholder"
          @input="$emit('update:value', $event.target.value)"
          class="resize-none"
          :rows="rows"
        ></textarea>

        <input
          :disabled="disabled"
          :step="step"
          v-else
          @focus="$emit('focus')"
          :type="type"
          :id="id"
          v-bind="field"
          :placeholder="placeholder"
          :autocomplete="false"
          :minlength="minlength"
          :maxlength="maxlength"
          :size="size"
          :pattern="pattern"
          @input="$emit('update:value', $event.target.value)"
          @change="$emit('change')"
          autocomplete="off"
        />
        <div v-if="prepend" class="prepend">
          <slot name="prepend"></slot>
        </div>
      </div>
      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-error"
      />
    </div>
  </VeeField>
</template>

<script setup>
import { useField } from "vee-validate";
import { watch } from "vue";

const props = defineProps({
  id: {
    required: true,
  },
  disabled: {
    required: false,
  },
  name: {
    required: true,
  },
  classes: {
    required: false,
  },
  rows: {
    required: false,
  },

  label: {
    required: false,
  },
  step: {
    required: false,
  },
  prepend: {
    required: false,
  },
  minlength: {
    required: false,
  },
  maxlength: {
    required: false,
  },
  size: {
    required: false,
  },
  pattern: {
    required: false,
  },

  icon: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  labelIcon: {
    required: false,
  },
  value: {
    required: false,
  },
  labelClass: {
    required: false,
  },
  type: {
    required: false,
    default: "text",
  },
  optional: {
    required: false,
    default: false,
  },
});

const inputFiled = useField(props.name);

watch(
  () => props.value,
  (value) => {
    if (value || value == 0) {
      inputFiled.setValue(value);
    }
  },
  { immediate: true }
);
</script>

<style>
@reference "../../style.css";
.input_wrapper {
  @apply relative space-y-1 border border-primary/50 shadow-[0px_6px_20px_0px_#0000001A] rounded-xl p-3;
  input {
    @apply p-2 w-full bg-transparent;
    &:focus {
      @apply !border-none !outline-none;
    }
    &:-webkit-autofill {
      @apply !border-none !outline-none !bg-green-500;
    }
  }
}
</style>
