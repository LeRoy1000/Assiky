<template>
  <section class="bg-white py-6 px-4 md:px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <i class="bi bi-bookmark-fill text-xl text-secondary"></i>
      <h2 class="ff-raleway text-secondary text-base font-semibold">Publications</h2>
    </div>

    <swiper-container
      ref="swiperEl"
      class="w-full md:max-w-[368px] lg:max-w-[570px] xl:max-w-[825px] 2xl:max-w-[980px]"
      init="false"
    >
      <swiper-slide><PublicationCard /></swiper-slide>
      <swiper-slide><PublicationCard /></swiper-slide>
      <swiper-slide><PublicationCard /></swiper-slide>
    </swiper-container>
    <div class="flex items-center justify-end gap-4">
      <button
        type="button"
        class="swiper-button-prev-custom text-fourthly w-10 h-10 rounded-full bg-silver transition-colors hover:bg-grey-blue"
      >
        <p class="sr-only">Previous Slide</p>
        <i class="bi bi-arrow-left text-lg"></i>
      </button>
      <button
        type="button"
        class="swiper-button-next-custom text-fourthly w-10 h-10 rounded-full bg-silver transition-colors hover:bg-grey-blue"
      >
        <p class="sr-only">Next Slide</p>
        <i class="bi bi-arrow-right text-lg"></i>
      </button>
    </div>
  </section>
</template>

<script setup type="module">
import PublicationCard from './PublicationCard.vue';
import { register } from 'swiper/element/bundle';

register();

const swiperEl = ref(null);

onMounted(() => {
  if (process.client) {
    const btnPrev = document.querySelector('.swiper-button-prev-custom');
    const btnNext = document.querySelector('.swiper-button-next-custom');

    btnPrev.addEventListener('click', () => {
      swiperEl.value.swiper.slidePrev();
    });
    btnNext.addEventListener('click', () => {
      swiperEl.value.swiper.slideNext();
    });

    const params = {
      slidesPerView: 'auto',
      navigation: true,
      spaceBetween: '24',
      speed: '500',
      loop: true,
      injectStyles: [
        `
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
      `,
      ],
    };

    Object.assign(swiperEl.value, params);

    swiperEl.value.initialize();
  }
});
</script>

<style scoped>
swiper-slide {
  width: auto;
}
</style>
