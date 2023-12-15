<template>
  <div class="flex flex-col min-h-screen">
    <NuxtLayout>
      <TheHeader />
      <NuxtPage />
      <TheFooter class="mt-auto" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader/TheHeader';
import TheFooter from '../components/TheFooter/TheFooter';

import 'bootstrap-icons/font/bootstrap-icons';
</script>

<style src="bootstrap-icons/font/bootstrap-icons.css"></style>
<style>
main {
  margin-top: 80px;
}
</style>
