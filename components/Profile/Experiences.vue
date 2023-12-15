<template>
  <section class="bg-white py-6 px-4 md:px-8 rounded-lg flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <i class="bi bi-tv text-xl text-secondary"></i>
      <h2 class="ff-raleway text-secondary text-base font-semibold">Experiences</h2>
    </div>
    <div class="flex flex-col gap-4">
      <section v-for="item in xp" :key="item.duration" class="flex flex-col gap-1">
        <h3 class="text-sm text-fourthly font-semibold">{{ item.role }}</h3>
        <div class="text-sm flex items-center gap-2">
          <p class="text-light-grey">{{ item.duration }}</p>
          <span>|</span>
          <p class="text-fourthly flex items-center">
            <i class="bi bi-briefcase mr-2"></i>
            {{ item.company }}
          </p>
        </div>
        <p class="text-light-grey">{{ item.details }}</p>
      </section>
    </div>
  </section>
</template>

<script setup>
const xp = [
  {
    role: 'Lead DevOps Engineer',
    duration: 'Oct. 2022 - now',
    company: 'Mostow Co.',
    details:
      'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. ',
  },
  {
    role: 'Back-end developper',
    duration: 'Aug. 2021 - Oct. 2022',
    company: 'Western Auto',
    details:
      'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. ',
  },
  {
    role: 'Front-end developper',
    duration: 'Jan. 2020 - Jul. 2022',
    company: 'J. Brannam',
    details:
      'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. ',
  },
];
</script>
