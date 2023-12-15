<template>
  <NuxtLink :to="href" :class="classes">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
    default: '/',
  },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['normal', 'medium', 'small'].includes(value);
    },
  },
});

const classes = computed(() => {
  const classes = ['link'];

  if (props.size) {
    classes.push(`link--${props.size.toLowerCase()}`);
  }

  return classes;
});
</script>

<style src="./BaseLink.css" scoped></style>
