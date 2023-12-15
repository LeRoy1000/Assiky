<template>
  <Story title="Shadows" :layout="{ type: 'grid', width: 250 }">
    <Variant :title="item.title" v-for="item in shadows" :key="item.title">
      <Shadows :width="item.width" color="ABBED1" :opacity="item.opacity"></Shadows>
    </Variant>
  </Story>
</template>

<script setup>
import Shadows from './Shadows.vue';

const shadows = [
  {
    title: '2px, #ABBED1 (60%)',
    width: 2,
    opacity: 80,
  },
  {
    title: '4px, #ABBED1 (40%)',
    width: 4,
    opacity: 40,
  },
  {
    title: '6px, #ABBED1 (30%)',
    width: 6,
    opacity: 30,
  },
  {
    title: '8px, #ABBED1 (40%)',
    width: 8,
    opacity: 40,
  },
  {
    title: '16px, #ABBED1 (30%)',
    width: 16,
    opacity: 30,
  },
];
</script>
