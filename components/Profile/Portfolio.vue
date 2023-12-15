<template>
  <section class="bg-white py-6 px-4 md:px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <i class="bi bi-stack text-xl text-secondary"></i>
      <h2 class="ff-raleway text-secondary text-base font-semibold">Portfolio</h2>
    </div>

    <div id="myCarousel" class="f-carousel">
      <a
        :href="img"
        data-fancybox="gallery"
        class="f-carousel__slide"
        v-for="img in images"
        :key="img"
      >
        <img :src="img" alt="Description" />
      </a>
    </div>
    <div class="flex items-center justify-end gap-4">
      <button
        type="button"
        data-carousel-prev
        @click="slidePrev"
        class="button-prev text-fourthly w-10 h-10 rounded-full bg-silver transition-colors hover:bg-grey-blue"
      >
        <p class="sr-only">Previous Slide</p>
        <i class="bi bi-arrow-left text-lg"></i>
      </button>
      <button
        type="button"
        data-carousel-next
        class="button-next text-fourthly w-10 h-10 rounded-full bg-silver transition-colors hover:bg-grey-blue"
      >
        <p class="sr-only">Next Slide</p>
        <i class="bi bi-arrow-right text-lg"></i>
      </button>
    </div>
  </section>
</template>

<script setup type="module">
import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fancyapps/ui/dist/carousel/carousel.css';

import portfolio0 from '@/assets/img/portfolio-0.png';
import portfolio1 from '@/assets/img/portfolio-1.jpg';
import portfolio2 from '@/assets/img/portfolio-2.jpg';
import portfolio3 from '@/assets/img/portfolio-3.jpg';
import portfolio4 from '@/assets/img/portfolio-4.jpg';

const images = [portfolio0, portfolio2, portfolio3, portfolio4, portfolio2, portfolio3, portfolio1];

onMounted(() => {
  if (process.client) {
    const container = document.getElementById('myCarousel');
    const options = {
      Dots: {
        minCount: 2,
      },
      Navigation: false,
      infinite: false,
      fill: true,
      slidesPerPage: 'auto',
    };
    const portfolioCarousel = new Carousel(container, options);

    document.querySelector('.button-prev').addEventListener('click', function () {
      portfolioCarousel.slidePrev();
    });
    document.querySelector('.button-next').addEventListener('click', function () {
      portfolioCarousel.slideNext();
    });
  }
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    transition: 'slide',
  },
  Thumbs: {
    type: 'classic',
  },
  Toolbar: {
    display: {
      left: ['close'],
      middle: ['infobar'],
      right: [],
    },
  },
});
</script>

<style scoped>
.fancybox__container .fancybox__backdrop {
  background: rgba(24, 24, 27, 0.5) !important;
}

.f-carousel__slide {
  display: inline-block;
  width: fit-content;
  max-width: 365px;
}

.f-carousel {
  --f-button-width: 40px;
  --f-button-height: 40px;

  --f-carousel-slide-padding: 0 0.75rem;

  --f-button-svg-width: 16px;
  --f-button-svg-height: 16px;
  --f-button-svg-stroke-width: 2.5;

  --f-button-color: #2c3e50;
  --f-button-border-radius: 50%;

  --f-button-bg: #f5f7fa;
  --f-button-hover-bg: #abbed1;
  --f-button-active-bg: #f0f0f0;
}
</style>
