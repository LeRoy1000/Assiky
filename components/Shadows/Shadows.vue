<template>
  <div>
    <div
      class="w-24 h-24 m-6 rounded-xl bg-white dark:bg-black"
      :style="{ boxShadow: `0 ${width}px ${width * 2}px 0 #${color}${opacity}` }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: [String, Number],
    required: true,
    default: 1,
  },
  color: {
    type: [String, Number],
    required: true,
    default: 'ABBED1',
  },
  opacity: {
    type: [Number, String],
    default: 60,
  },
});
</script>
