<template>
  <div>
    <template v-if="gradientBackground">
      <div
        class="w-24 h-24 rounded-xl"
        :style="{
          backgroundImage: `linear-gradient(90deg, #${background} 0%, #${gradientBackground} 100%)`,
        }"
      ></div>
    </template>
    <template v-else>
      <div class="w-24 h-24 rounded-xl" :style="{ backgroundColor: `#${background}` }"></div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  background: {
    type: [String, Number],
    required: true,
  },
  gradientBackground: {
    type: [String, Number],
    required: false,
  },
});
</script>
