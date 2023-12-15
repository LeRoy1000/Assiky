<template>
  <footer class="bg-fourthly text-grey-blue">
    <div class="container relative mx-auto py-24 md:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
        <div class="flex flex-col gap-10 max-w-max">
          <NuxtLink to="/" aria-label="Go to homepage">
            <img src="~/assets/icon/LogoGreen.svg" alt="" role="presentation" />
          </NuxtLink>
          <div>
            <p class="text-grey-blue mb-4">Copyright © 2023 Assiky.</p>
            <p class="text-grey-blue">All rights reserved</p>
          </div>
          <div>
            <ul class="flex items-center gap-4">
              <li v-for="item in socialMedia" :key="item.label">
                <NuxtLink
                  :to="item.href"
                  :aria-label="item.label"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffffff15] hover:bg-[#ffffff80] hover:transition-colors"
                >
                  <i :class="`bi-${item.src}`" class="bi text-white" aria-hidden="true"></i>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12">
          <div v-for="(item, index) in footerLinks" :key="index">
            <h3 class="ff-raleway text-white font-semibold mb-6 text-xl">
              {{ item.title }}
            </h3>
            <ul class="flex flex-col gap-3">
              <li v-for="(link, i) in item.links" :key="i">
                <NuxtLink
                  :to="link.href"
                  class="inline-block hover:text-white hover:font-medium focus:text-white focus:font-medium transition-colors"
                >
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-6 text-xl">Stay up to date</h3>

            <div class="flex relative mb-6">
              <input
                type="email"
                name="newsletter"
                id="newsletter"
                class="bg-[#ABBED120] py-2 pl-3 pr-10 rounded w-full text-grey-blue placeholder:text-grey-blue"
                placeholder="Your email address"
                aria-label="Enter your email address"
              />
              <button
                type="submit"
                class="absolute right-0 flex items-center p-3 rounded h-10 focus:ring-grey-blue focus:ring-1"
                aria-label="Submit Email"
              >
                <i class="bi bi-send text-grey-blue" aria-hidden="true"></i>
              </button>
            </div>
            <form class="relative">
              <select
                v-model="locale"
                class="py-2 px-8 text-white bg-black rounded-lg transition-colors cursor-pointer uppercase font-semibold"
              >
                <option value="en">en</option>
                <option value="fr">fr</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n();

const footerLinks = [
  {
    title: 'Links',
    links: [
      {
        text: 'About us',
        href: '/',
      },
      {
        text: 'Profile search',
        href: '/',
      },
      {
        text: 'Contact us',
        href: '/',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        text: 'Help center',
        href: '/',
      },
      {
        text: 'Terms of service',
        href: '/',
      },
      {
        text: 'Legal',
        href: '/',
      },
      {
        text: 'Privacy Policy',
        href: '/',
      },
    ],
  },
];

const socialMedia = [
  {
    href: '/',
    label: 'Follow Us on Instagram',
    src: 'instagram',
  },
  {
    href: '/',
    label: 'Follow Us on Twitter',
    src: 'twitter',
  },
  {
    href: '/',
    label: 'Follow Us on Youtube',
    src: 'youtube',
  },
];
</script>

<style src="./TheFooter.css" scoped></style>

<style scoped>
form::before {
  content: url('~/assets/icon/IconGlobe.svg');
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
}

select {
  appearance: none;
  background-image: url('~/assets/icon/IconArrowDown.svg'),
    linear-gradient(to right, #1ae81a, #466884);
  background-repeat: no-repeat;
  background-position: 60px center, center;
}
</style>
