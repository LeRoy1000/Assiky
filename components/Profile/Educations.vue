<template>
  <section class="bg-white py-6 px-4 md:px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <img src="~/assets/icon/IconDiploma.svg" alt="" role="presentation" width="22" />
      <h2 class="ff-raleway text-secondary text-base font-semibold">Educations</h2>
    </div>
    <div class="flex flex-col gap-4">
      <section v-for="item in certifs" :key="item.name" class="flex flex-col gap-1">
        <div class="text-sm flex items-center gap-2">
          <p class="text-light-grey">{{ item.duration }}</p>
          <span>|</span>
          <p class="text-fourthly flex items-center gap-2">
            <img src="~/assets/icon/IconBank.svg" alt="" role="presentation" />
            {{ item.university }}
          </p>
        </div>
        <h3 class="font-semibold">{{ item.degree }}</h3>
      </section>
    </div>
  </section>
</template>

<script setup>
const certifs = [
  {
    duration: '2018 - 2020',
    university: 'J.B. Van Sciver',
    degree: 'Master degree',
  },
  {
    duration: '2016 - 2017',
    university: 'Omni Realty',
    degree: 'Bachelor degree',
  },
];
</script>
