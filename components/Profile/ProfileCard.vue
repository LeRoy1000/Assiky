<template>
  <div
    class="bg-white w-60 rounded-lg px-2 py-6 shadow-lg flex flex-col items-center justify-center"
  >
    <div class="rounded-full w-20 h-20 bg-tint-5 flex items-center justify-center">
      <slot name="img">
        <img src="~/assets/icon/IconVariant2.svg" alt="Assiky Icon" />
      </slot>
    </div>
    <div class="flex flex-col items-center gap-4">
      <h3 class="text-fourthly text-sm font-semibold">Loop Sinus</h3>
      <span class="text-grey-blue text-xs">Benin</span>
      <div class="flex items-center gap-2">
        <img src="~/assets/icon/IconAwardGreen.svg" alt="" role="presentation" />
        <p class="text-secondary text-sm">Web Developer</p>
      </div>
      <div class="flex items-center gap-1">
        <img src="~/assets/icon/IconClock.svg" alt="" role="presentation" />
        <p class="text-fourthly text-sm">Part-time</p>
      </div>
      <div>
        <client-only>
          <star-rating
            :rating="5"
            :read-only="true"
            :show-rating="false"
            :rounded-corners="true"
            :border-width="3"
            :padding="0.95"
            :star-size="12"
            active-color="#4CAF50"
            inactive-color="white"
            border-color="#4CAF50"
          ></star-rating>
        </client-only>
      </div>
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
import StarRating from 'vue-star-rating';
</script>
