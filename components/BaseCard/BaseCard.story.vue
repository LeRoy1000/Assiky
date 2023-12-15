<template>
  <Story>
    <BaseCard />
  </Story>
</template>

<script setup>
import BaseCard from './BaseCard.vue';
import { reactive } from 'vue';

const state = reactive({
  variant: 'secondary',
  label: 'Histoire Btn',
  icon: '<i class="bi bi-arrow-right"></i>',
  iconPosition: 'left',
});
</script>
