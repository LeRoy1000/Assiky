<template>
  <section class="bg-white py-6 px-4 md:px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <img src="~/assets/icon/IconDiploma.svg" alt="" role="presentation" width="22" />
      <h2 class="ff-raleway text-secondary text-base font-semibold">Certifications</h2>
    </div>
    <div class="flex flex-col gap-4">
      <section v-for="item in certifs" :key="item.name" class="flex flex-col gap-1">
        <div class="text-sm text-fourthly flex items-center gap-2">
          <h3 class="font-semibold">{{ item.name }}</h3>
          <span>|</span>
          <p class="flex items-center gap-2">
            <img src="~/assets/icon/IconBank.svg" alt="" role="presentation" />
            {{ item.issuer }}
          </p>
        </div>
        <p class="text-light-grey">{{ item.details }}</p>
      </section>
    </div>
  </section>
</template>

<script setup>
const certifs = [
  {
    name: 'AWS Certified Solution Architect',
    issuer: 'Amazon Web Services',
    details: 'It specialist who is able to design high level of architecture on AWS',
  },
  {
    name: 'Linux Certified System Architect',
    issuer: 'LPS',
    details: 'It specialist who is able to administre high level of architecture',
  },
];
</script>
