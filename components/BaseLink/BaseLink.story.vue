<template>
  <Story title="Link" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Normal">
      <BaseLink label="Label" href="" size="normal" />
    </Variant>
    <Variant title="Medium">
      <BaseLink label="Label" href="" size="medium" />
    </Variant>
    <Variant title="Small">
      <BaseLink label="Label" href="" size="small" />
    </Variant>
  </Story>
</template>

<script setup>
import BaseLink from './BaseLink.vue';
</script>
