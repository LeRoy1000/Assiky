<template>
  <Story title="Button" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Primary">
      <template #default>
        <BaseButton label="Histoire" variant="primary"></BaseButton>
      </template>
    </Variant>
    <Variant title="Secondary">
      <BaseButton :label="state.label" :variant="state.variant"> </BaseButton>

      <template #controls>
        <HstSelect
          title="Type"
          v-model="state.variant"
          :options="['primary', 'secondary', 'tertiary']"
        />
      </template>
    </Variant>
    <Variant title="Tertiary">
      <BaseButton label="Histoire" variant="tertiary">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 320 512">
            <path
              fill="currentColor"
              d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </template>
      </BaseButton>
    </Variant>
  </Story>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { reactive } from 'vue';

const state = reactive({
  variant: 'secondary',
  label: 'Histoire Btn',
});
</script>
