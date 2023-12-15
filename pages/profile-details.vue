<template>
  <main class="bg-silver dark:bg-fourthly text-fourthly dark:text-grey-blue">
    <div class="container mx-auto py-12">
      <div class="grid grid-cols-1 md:grid-cols-[15rem_auto] gap-12">
        <div class="flex flex-col gap-6">
          <ProfileCard class="border border-grey-blue shadow-none w-auto" />
          <div class="px-4 py-6 rounded-lg border border-grey-blue bg-white">
            <ul class="text-sm text-fourthly flex flex-col items-center md:items-start gap-4 mb-4">
              <li class="flex items-center gap-2">
                <img src="~/assets/icon/IconBinocular.svg" alt="" role="presentation" width="28" />
                <span>4525 Saints Alley, Plant City, FL 33564</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="bi bi-telephone text-base"></i>
                <span>(765) 322-1399</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="bi bi-at text-2xl"></i>
                <span style="word-break: break-word">Daniel_hamilton@aol.com</span>
              </li>
            </ul>
            <ul class="flex items-center justify-center gap-4">
              <li class="">
                <NuxtLink
                  to="/"
                  aria-label="Check Github profile"
                  class="w-7 h-7 rounded-full text-white flex items-center justify-center transition-colors bg-gradient-to-r from-primary to-tertiary hover:to-primary"
                >
                  <i class="bi bi-github text-xl" aria-hidden="true"></i>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  aria-label="Check Linkedin profile"
                  class="w-7 h-7 rounded-full text-white flex items-center justify-center transition-colors bg-gradient-to-r from-primary to-tertiary hover:to-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  aria-label="Check Twitter profile"
                  class="w-7 h-7 rounded-full text-white flex items-center justify-center transition-colors bg-gradient-to-r from-primary to-tertiary hover:to-primary"
                >
                  <i class="bi bi-twitter" aria-hidden="true"></i>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <section class="bg-white py-6 px-8 rounded-lg flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <img src="~/assets/icon/IconAwardGreen.svg" alt="" role="presentation" />
              <h2 class="ff-raleway text-secondary text-base font-semibold">
                Web developer | Graphic Designer
              </h2>
            </div>
            <p class="text-sm text-light-grey">
              Voici un fake exemple de description de profile pour dire ce qu'est le Talent, les
              valeurs qu'il/elle promeut. Ses réalisations et ce qu'elle propose à ses
              clients/employeurs.
            </p>
          </section>
          <Skills />
          <Experiences />
          <Certifications />
          <Educations />
          <Portfolio />
          <Publications />
          <BaseButton
            variant="primary"
            size="normal"
            label="Say Hello to Sinus"
            class="mx-auto mt-4"
          >
            <template #icon>
              <img src="~/assets/icon/IconHello.svg" alt="" role="presentation" width="28" />
            </template>
          </BaseButton>
        </div>
      </div>
    </div>
    <Connect />
    <Future />
  </main>
</template>

<script setup>
import Future from '~/components/Future.vue';
import Connect from '~/components/Connect.vue';
import ProfileCard from '~/components/Profile/ProfileCard.vue';
import Skills from '~/components/Profile/Skills.vue';
import Experiences from '~/components/Profile/Experiences.vue';
import Certifications from '~/components/Profile/Certifications.vue';
import Educations from '~/components/Profile/Educations.vue';
import Portfolio from '~/components/Profile/Portfolio.vue';
import Publications from '~/components/Profile/Publications.vue';

useHead({
  title: 'Profile Details | Assiky',
  meta: [{ name: 'description', content: 'Learn more about our talents.' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css',
    },
  ],
});
</script>
