<template>
  <main class="bg-white dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="bg-[url('/assets/img/bg-computer.png')] bg-no-repeat bg-cover py-12">
      <div class="container mx-auto text-center">
        <h1 class="ff-raleway text-silver text-3xl font-bold">Why Assiky</h1>
      </div>
    </div>

    <Mission />

    <Vision />

    <Why />

    <Battalion>
      <template #text>
        We invite you to be part of our mission to revolutionize the way IT careers are built.
        Whether you're looking to make your mark in web development, mobile apps, devops, cloud
        computing, or any other IT domain, Assiky is here to support you every step of the way.
      </template>
    </Battalion>

    <Team />

    <Connect />

    <Future />
  </main>
</template>

<script setup>
import Mission from '~/components/WhyAssiky/Mission.vue';
import Vision from '~/components/WhyAssiky/Vision.vue';
import Why from '~/components/WhyAssiky/Why.vue';
import Team from '~/components/WhyAssiky/Team.vue';
import Connect from '~/components/Connect.vue';
import Future from '~/components/Future.vue';

useHead({
  title: 'Why Assiky',
  meta: [{ name: 'description', content: 'Discover the reason of our existence.' }],
});
</script>
