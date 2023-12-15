<template>
  <div
    class="custom-shadow bg-white w-60 rounded-lg px-2 py-6 flex flex-col items-center justify-center"
  >
    <div class="rounded-full w-20 h-20 bg-tint-5 flex items-center justify-center">
      <slot name="img">
        <img src="~/assets/icon/IconVariant2.svg" alt="Assiky Icon" />
      </slot>
    </div>
    <div class="flex flex-col items-center gap-2">
      <h3 class="text-fourthly text-sm font-semibold">Loop Sinus</h3>
      <span class="text-grey-blue text-xs">Benin</span>
      <div class="flex items-center gap-2">
        <img src="~/assets/icon/IconAwardGreen.svg" alt="" role="presentation" />
        <p class="text-secondary text-sm">Web Developer</p>
      </div>
      <div class="flex items-center gap-1">
        <img src="~/assets/icon/IconClock.svg" alt="" role="presentation" />
        <p class="text-fourthly text-sm">Full-time</p>
      </div>
      <ul class="flex items-center">
        <li v-for="(item, index) in tech" :key="index" class="list-item">{{ item }}</li>
      </ul>
      <slot name="button">
        <BaseButton label="Connect" variant="primary" size="small">
          <template #icon>
            <i class="bi bi-arrow-right text-lg" aria-hidden="true"></i>
          </template>
        </BaseButton>
      </slot>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../BaseButton/BaseButton.vue';

const tech = ['Angular', 'VueJS', 'Laravel', 'PHP'];
</script>

<style scoped src="./BaseCard.css"></style>

<style scoped>
.custom-shadow {
  box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);
}
.custom-shadow:hover,
.custom-shadow:focus {
  box-shadow: 0px 8px 16px 0px rgba(171, 190, 209, 0.3);
}
.list-item {
  font-size: 0.75rem;
}
.list-item:not(:last-of-type)::after {
  content: '|';
  color: inherit;
  font-size: inherit;
  display: inline-block;
  padding-inline: 0.25rem;
}
</style>
