<template>
  <section class="bg-white py-6 px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <i class="bi bi-gem text-secondary text-xl"></i>
      <h2 class="ff-raleway text-secondary text-base font-semibold">Skills</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        class="grid grid-cols-[1fr_2fr] md:grid-cols-[1.5fr_2fr] xl:grid-cols-2 gap-8"
        v-for="item in skills"
        :key="item.name"
      >
        <div class="text-fourthly flex items-center gap-2 xl:py-2 xl:px-6">
          <i :class="`devicon-${item.icon}-plain`" class="text-xl"></i>
          <p>{{ item.name }}</p>
        </div>
        <div>
          <client-only>
            <star-rating
              :rating="item.rating"
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
      </div>
    </div>
  </section>
</template>

<script setup>
import StarRating from 'vue-star-rating';
const skills = [
  {
    name: 'PHP',
    icon: 'php',
    rating: 4,
  },
  {
    name: 'Vuejs',
    icon: 'vuejs',
    rating: 3,
  },
  {
    name: 'Laravel',
    icon: 'laravel',
    rating: 3,
  },
  {
    name: 'Angular',
    icon: 'angularjs',
    rating: 2,
  },
  {
    name: 'CSS',
    icon: 'css3',
    rating: 4,
  },
  {
    name: 'HTML',
    icon: 'html5',
    rating: 4,
  },
];
</script>
