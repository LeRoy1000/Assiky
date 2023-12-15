<template>
  <Story title="Colors" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="item in colors" :key="item.title" :title="item.title">
      <Colors v-if="item.color2" :background="item.color" :gradientBackground="item.color2" />
      <Colors v-else :background="item.color" />
    </Variant>
  </Story>
</template>

<script setup>
import Colors from './Colors.vue';

const colors = [
  {
    title: 'Black (#263238)',
    color: '263238',
  },
  {
    title: 'Dark grey (#4D4D4D)',
    color: '4D4D4D',
  },
  {
    title: 'Grey (#717171)',
    color: '717171',
  },
  {
    title: 'Light Grey (#89939E)',
    color: '89939E',
  },
  {
    title: 'Grey Blue (#ABBED1)',
    color: 'ABBED1',
  },
  {
    title: 'Silver Acc (#F2F2F2)',
    color: 'F2F2F2',
  },
  {
    title: 'Silver (#F5F7FA)',
    color: 'F5F7FA',
  },
  {
    title: 'White (#FFFFFF)',
    color: 'FFFFFF',
  },
  {
    title: 'Primary (#1AE81A)',
    color: '1AE81A',
  },
  {
    title: 'Secondary (#4CAF50)',
    color: '4CAF50',
  },
  {
    title: 'Thirdly (#466884)',
    color: '466884',
  },
  {
    title: 'Fourthly (#2C3E50)',
    color: '2C3E50',
  },
  {
    title: 'Shade 1 (#1AE81A, #466884)',
    color: '1AE81A',
    color2: '466884',
  },
  {
    title: 'Shade 2 (#4CAF50, #1AE81A)',
    color: '4CAF50',
    color2: '1AE81A',
  },
  {
    title: 'Shade 3 (#237D31)',
    color: '237D31',
  },
  {
    title: 'Shade 4 (#1B5E1F)',
    color: '1B5E1F',
  },
  {
    title: 'Shade 5 (#103E13)',
    color: '103E13',
  },
  {
    title: 'Tint 1 (#66BB69)',
    color: '66BB69',
  },
  {
    title: 'Tint 2 (#81C784)',
    color: '81C784',
  },
  {
    title: 'Tint 3 (#A5D3A7)',
    color: 'A5D3A7',
  },
  {
    title: 'Tint 4 (#C8E6C9)',
    color: 'C8E6C9',
  },
  {
    title: 'Tint 5 (#E8F5E9)',
    color: 'E8F5E9',
  },
  {
    title: 'Warning (#FBC02D)',
    color: 'FBC02D',
  },
  {
    title: 'Error (#E53835)',
    color: 'E53835',
  },
  {
    title: 'Success (#2E7D31)',
    color: '2E7D31',
  },
];
</script>
