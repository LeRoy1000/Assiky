<template>
  <div>
    <div class="text-black dark:text-white">
      <component
        :is="tag"
        :style="{
          'font-family': fontFamily,
          'font-size': fontSize + 'rem',
          'font-weight': fontWeight,
          'line-height': lineHeight + 'rem',
        }"
        style="margin-bottom: 1rem"
      >
        {{ label }}
      </component>
      <p class="text-light-grey text-base">{{ subLabel }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true,
    validator(value) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value);
    },
    default: 'p',
  },
  label: {
    type: String,
    required: true,
  },
  subLabel: {
    type: String,
    required: false,
  },
  fontFamily: {
    type: String,
    required: true,
  },
  fontSize: {
    type: [String, Number],
    required: false,
    default: 1,
  },
  fontWeight: {
    type: [String, Number],
    default: '400',
  },
  lineHeight: {
    type: [String, Number],
    default: 1.5,
  },
});
</script>
