<template>
  <div class="">
    <div id="faq-container" class="flex flex-col gap-2">
      <form
        action=""
        class="p-4 m-2 rounded-lg border border-grey-blue bg-white"
        v-for="item in form"
        :key="item.legend"
      >
        <fieldset class="accordion-item flex flex-col gap-2">
          <button
            aria-expanded="true"
            :aria-controls="`accordion-${item.legend}`"
            class="accordion-btn"
            @click.prevent=""
          >
            <legend class="text-fourthly font-semibold flex items-center gap-2">
              <img :src="item.src" alt="" role="presentation" width="22" />
              {{ item.legend }}
              <i
                class="bi bi-chevron-down leading-none text-2xl transition-transform"
                aria-hidden="true"
              ></i>
            </legend>
          </button>
          <div :id="`accordion-${item.legend}`" class="flex flex-col gap-2">
            <div
              class="pl-3 text-grey-blue text-sm flex items-center gap-4"
              v-for="input in item.checkbox"
              :key="input.label"
            >
              <input
                type="checkbox"
                :id="input.label"
                :name="input.label"
                class="peer appearance-none w-4 h-4 border border-grey-blue rounded cursor-pointer text-grey-blue checked:border-secondary"
              />
              <label :for="input.label" class="peer-checked:text-secondary cursor-pointer">
                {{ input.label }}</label
              >
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import IconAward from './assets/icon/IconAward.svg';
import IconGem from './assets/icon/IconGem.svg';
import IconClock from './assets/icon/IconClock.svg';
import IconBinocular from './assets/icon/IconBinocular.svg';

onMounted(() => {
  if (process.client) {
    const faqContainer = document.getElementById('faq-container');

    faqContainer.addEventListener('click', function (e) {
      const clickedAccordion = e.target.closest('.accordion-btn');

      if (!clickedAccordion) return;

      // const activeContent = clickedAccordion.getAttribute('aria-controls');
      const clickAriaExpanded = clickedAccordion.getAttribute('aria-expanded');

      if (clickAriaExpanded === 'true') {
        clickedAccordion.setAttribute('aria-expanded', false);
        // document.getElementById(activeContent).style.display = 'none';
      } else {
        clickedAccordion.setAttribute('aria-expanded', true);
      }
    });
  }
});

const form = [
  {
    legend: 'Education',
    src: IconAward,
    checkbox: [
      {
        label: 'Web developement',
      },
      {
        label: 'Mobile Development',
      },
      {
        label: 'DevOps',
      },
      {
        label: 'Cloud Computing',
      },
    ],
  },
  {
    legend: 'Skills',
    src: IconGem,
    checkbox: [
      {
        label: 'PHP',
      },
      {
        label: 'Flutter',
      },
      {
        label: 'Laravel',
      },
      {
        label: 'NextJS',
      },
    ],
  },
  {
    legend: 'Availability',
    src: IconClock,
    checkbox: [
      {
        label: 'Full-time',
      },
      {
        label: 'Freelance',
      },
      {
        label: 'Part-Time',
      },
    ],
  },
  {
    legend: 'Location',
    src: IconBinocular,
    checkbox: [
      {
        label: 'Benin',
      },
      {
        label: 'Nigeria',
      },
      {
        label: 'France',
      },
      {
        label: 'Ivory Coast',
      },
    ],
  },
];
</script>

<style scoped>
input[type='checkbox']::before {
  content: url('/assets/icon/IconCheck.svg');
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type='checkbox']:checked::before {
  content: url('/assets/icon/IconCheckGreen.svg');
}

.accordion-btn[aria-expanded='true'] i {
  transform: rotate(180deg);
}

.accordion-btn[aria-expanded='false'] + div {
  display: none;
}
</style>
