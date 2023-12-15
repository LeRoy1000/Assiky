<template>
  <main class="bg-white dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <Hero />
    <Career />
    <Skills />
    <Talent />
    <Opportunities />
    <Connections />
    <Stories />
    <Battalion>
      <template #text>
        Embark on a journey that promises growth, learning, and limitless possibilities. The IT
        landscape is vast, and together, we'll make sure you navigate it with confidence.
      </template>
    </Battalion>
    <SuccessStory />
  </main>
</template>

<script setup>
import Hero from '~/components/Home/Hero.vue';
import Career from '~/components/Home/Career.vue';
import Skills from '~/components/Home/Skills.vue';
import Talent from '~/components/Home/Talent.vue';
import Opportunities from '~/components/Home/Opportunities.vue';
import Connections from '~/components/Home/Connections.vue';
import Stories from '~/components/Home/Stories.vue';
import Battalion from '~/components/Battalion.vue';
import SuccessStory from '~/components/SuccessStory.vue';

useHead({
  title: 'Welcome to Assiky',
  meta: [{ name: 'description', content: 'Sky rocket yout IT skills!' }],
});
</script>
